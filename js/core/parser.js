(function(window) {
    const STRING_TOKEN = 0x06;
    const SAVE_KEY = "UKu52ePUBwetZ9wNX88o54dnfKRu0T1l";

    const SaveParser = {
        /**
         * 主解析函数
         * @param {File} file - 上传的 .dat 文件
         * @returns {Promise<{json: Object, meta: Object}>} JSON 对象和元数据
         */
        parseDatFile: function(file) {
            return file.arrayBuffer().then(buffer => {
                const raw = new Uint8Array(buffer);
                const extraction = this.extractString(raw);      // 提取 Base64 和元数据
                const jsonText = this.decryptBase64(extraction.base64); // 解密成 JSON 字符串
                return {
                    json: JSON.parse(jsonText),
                    meta: extraction.meta
                };
            });
        },

        /**
         * 导出为 .dat 文件内容
         * @param {Object} json - 修改后的 JSON 对象
         * @param {Object} meta - 原始文件的元数据
         * @returns {Uint8Array} 新的文件内容
         */
        exportDatFile: function(json, meta) {
            const jsonText = JSON.stringify(json);
            const base64 = this.encryptJson(jsonText);
            
            // 构造新的 7-bit 长度
            const newLengthBytes = this.write7bitEncodedInt(base64.length);
            
            // 构造新的 Base64 字节
            const newStringBytes = new TextEncoder().encode(base64);
            
            // 拼接：Header + NewLength + NewString + Footer
            const newSize = meta.header.length + newLengthBytes.length + newStringBytes.length + meta.footer.length;
            const result = new Uint8Array(newSize);
            
            let offset = 0;
            result.set(meta.header, offset);
            offset += meta.header.length;
            
            result.set(newLengthBytes, offset);
            offset += newLengthBytes.length;
            
            result.set(newStringBytes, offset);
            offset += newStringBytes.length;
            
            result.set(meta.footer, offset);
            
            return result;
        },

        /**
         * 从 BinaryFormatter 字节流中提取字符串
         * @param {Uint8Array} raw 
         * @returns {{base64: string, meta: Object}}
         */
        extractString: function(raw) {
            for (let i = 0; i < raw.length; i++) {
                if (raw[i] === STRING_TOKEN) {
                    const strlenOffset = i + 5;
                    const lenInfo = this.read7bitEncodedInt(raw, strlenOffset);
                    const strlen = lenInfo.length;
                    const stringStart = lenInfo.offset;

                    const utf8Bytes = raw.slice(stringStart, stringStart + strlen);
                    const base64 = new TextDecoder("utf-8").decode(utf8Bytes);
                    
                    return {
                        base64: base64,
                        meta: {
                            header: raw.slice(0, strlenOffset),
                            footer: raw.slice(stringStart + strlen)
                        }
                    };
                }
            }
            throw new Error("未找到 BinaryFormatter 字符串对象");
        },

        /**
         * 解析 C# BinaryFormatter 7-bit 编码长度
         * @param {Uint8Array} raw 
         * @param {number} pos 
         * @returns {{length:number, offset:number}}
         */
        read7bitEncodedInt: function(raw, pos) {
            let result = 0;
            let shift = 0;
            let offset = pos;

            while (true) {
                const b = raw[offset++];
                result |= (b & 0x7F) << shift;
                if ((b & 0x80) === 0) break;
                shift += 7;
            }

            return { length: result, offset };
        },

        /**
         * 写入 C# BinaryFormatter 7-bit 编码长度
         * @param {number} value 
         * @returns {Uint8Array}
         */
        write7bitEncodedInt: function(value) {
            const bytes = [];
            let v = value;
            while (v >= 0x80) {
                bytes.push((v | 0x80) & 0xFF);
                v >>= 7;
            }
            bytes.push(v);
            return new Uint8Array(bytes);
        },

        /**
         * AES-ECB 解密 Base64
         * 依赖 CryptoJS 库
         * @param {string} base64 
         * @returns {string} JSON 字符串
         */
        decryptBase64: function(base64) {
            if (!window.CryptoJS) {
                throw new Error("CryptoJS library is missing.");
            }
            const encrypted = CryptoJS.enc.Base64.parse(base64);
            const key = CryptoJS.enc.Utf8.parse(SAVE_KEY);

            const decrypted = CryptoJS.AES.decrypt(
                { ciphertext: encrypted },
                key,
                { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
            );

            return decrypted.toString(CryptoJS.enc.Utf8);
        },

        /**
         * AES-ECB 加密 JSON 字符串
         * @param {string} jsonText 
         * @returns {string} Base64
         */
        encryptJson: function(jsonText) {
            if (!window.CryptoJS) {
                throw new Error("CryptoJS library is missing.");
            }
            const key = CryptoJS.enc.Utf8.parse(SAVE_KEY);
            
            const encrypted = CryptoJS.AES.encrypt(
                jsonText,
                key,
                { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
            );
            
            return encrypted.toString();
        }
    };

    window.SaveParser = SaveParser;
})(window);

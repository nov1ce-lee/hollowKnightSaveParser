const STRING_TOKEN = 0x06;
const SAVE_KEY = "UKu52ePUBwetZ9wNX88o54dnfKRu0T1l";

/**
 * 主解析函数
 * @param {File} file - 上传的 .dat 文件
 * @returns {Promise<Object>} JSON 对象
 */
function parseDatFile(file) {
    return file.arrayBuffer().then(buffer => {
        const raw = new Uint8Array(buffer);
        const base64 = extractString(raw);          // 提取 Base64
        const jsonText = decryptBase64(base64);     // 解密成 JSON 字符串
        return JSON.parse(jsonText);                // 转成对象
    });
}

/**
 * 从 BinaryFormatter 字节流中提取字符串
 * @param {Uint8Array} raw 
 * @returns {string}
 */
function extractString(raw) {
    for (let i = 0; i < raw.length; i++) {
        if (raw[i] === STRING_TOKEN) {
            const strlenOffset = i + 5;
            const lenInfo = read7bitEncodedInt(raw, strlenOffset);
            const strlen = lenInfo.length;
            const stringStart = lenInfo.offset;

            const utf8Bytes = raw.slice(stringStart, stringStart + strlen);
            return new TextDecoder("utf-8").decode(utf8Bytes);
        }
    }
    throw new Error("未找到 BinaryFormatter 字符串对象");
}

/**
 * 解析 C# BinaryFormatter 7-bit 编码长度
 * @param {Uint8Array} raw 
 * @param {number} pos 
 * @returns {{length:number, offset:number}}
 */
function read7bitEncodedInt(raw, pos) {
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
}

/**
 * AES-ECB 解密 Base64
 * 依赖 CryptoJS 库
 * @param {string} base64 
 * @returns {string} JSON 字符串
 */
function decryptBase64(base64) {
    const encrypted = CryptoJS.enc.Base64.parse(base64);
    const key = CryptoJS.enc.Utf8.parse(SAVE_KEY);

    const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: encrypted },
        key,
        { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
    );

    return decrypted.toString(CryptoJS.enc.Utf8);
}

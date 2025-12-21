const STRING_TOKEN = 0x06;
const SAVE_KEY = "UKu52ePUBwetZ9wNX88o54dnfKRu0T1l";

function parseDatFile(file) {
    return file.arrayBuffer().then(buffer => {
        const raw = new Uint8Array(buffer);
        const base64 = extractString(raw);
        const jsonText = decryptBase64(base64);
        return JSON.parse(jsonText);
    });
}

/* extractString / read7bitEncodedInt / decryptBase64 */

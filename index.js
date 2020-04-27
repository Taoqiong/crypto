'use strict';
const crypto = require('crypto');

/**
 * @util 加密、解密工具类
 */
class CryptoUtil {

    /**
     * 解密
     * @param dataStr {string}
     * @param key {string}
     * @param iv {string}
     * @return {string}
     */
    static Decrypt(dataStr, key, iv) {
        let cipherChunks = [];
        let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
        decipher.setAutoPadding(true);
        cipherChunks.push(decipher.update(dataStr, 'base64', 'utf8'));
        cipherChunks.push(decipher.final('utf8'));
        return cipherChunks.join('');
    }

    /**
     * 加密
     * @param dataStr {string}
     * @param key {string}
     * @param iv {string}
     * @return {string}
     */
    static Encrypt(dataStr, key, iv) {
        let cipherChunks = [];
        let cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
        cipher.setAutoPadding(true);
        cipherChunks.push(cipher.update(dataStr, 'utf8', 'base64'));
        cipherChunks.push(cipher.final('base64'));
        return cipherChunks.join('');
    }
}

module.exports = CryptoUtil;

// var opts = process.argv;

var result = CryptoUtil.Decrypt('Auhv8PVF2Sj4v8P9y3s0YVCeqSQK3ry4OmWXUqe2EPdWr2AsQC8A5BEKOiFwhD5BI1D1lQRFDXzUQEjJexR/oUk1JLN1ZG3cvJldF6RQ83u6YVFcUGFnou5qkxprVHnEAjyid0/J4w/SyKavXmJJXgIwcOtLYb8DYcgDNjN0O2Q=', '6461772803150152', '8105547186756005')
console.log(result)


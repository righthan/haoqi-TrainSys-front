// 导入crypto-js库
import CryptoJS from 'crypto-js';

const key = "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d1e2f3a4b5c6d1e2f3a4b5c6d1e2f3a4b5c6d1e2f3a4b5c6";

// 加密函数
const encryptData = (data) => {
    // 将用户数据转换为 JSON 字符串
    const jsonString = JSON.stringify(data);

    // 使用 AES 加密算法和密钥进行加密
    const encryptedData = CryptoJS.AES.encrypt(jsonString, key).toString();

    // 将加密后的数据存储在localStorage中
    localStorage.setItem('encryptedData', encryptedData);
};

// 解密函数
const decryptData = () => {
    // 从localStorage中获取加密后的用户数据
    const encryptedData = localStorage.getItem('encryptedData');

    if (encryptedData) {
        // 使用 AES 解密算法和密钥进行解密
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);

        // 将解密后的数据转换为JSON对象
        const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));

        return decryptedData;
    }

    return null; // 如果没有加密数据，则返回null
};

export { encryptData, decryptData }
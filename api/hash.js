

const crypto = require('crypto'); // needed for the sha256 encryption/decryption


export const encrypt = (text) => {
    const _SALT = process.env.HASH_SALT; // the key 
    const _ITERATIONS = process.env.HASH_ITERATIONS; // the number of times the hash will be performed

    const hash = crypto.createHash('sha256'); // using instance of SHA256 algorithm as sha256
    let buffer = Buffer.from(text + _SALT, 'utf-8'); // convert the string to bytearray and add salt
    
    for (let i = 0; i < _ITERATIONS; i++) // for n iterations...
        buffer = hash.update(buffer).digest(); // hash once using sha256
    
    return buffer.toString('base64'); // return hashed result as (base64) string
}


export const decrypt = (hash) => {
    const _SALT = process.env.HASH_SALT; // the key 
    const _ITERATIONS = process.env.HASH_ITERATIONS; // the number of times the hash will be performed

    const hash = crypto.createHash('sha256'); // using instance of SHA256 algorithm as sha256
    const bytes = Buffer.from(hash, 'base64'); // convert the base64 string from the hash to bytearray
    let buffer = Buffer.from(bytes.toString('base64') + _SALT, 'utf-8'); // convert the bytearray to string and add salt
    
    for (let i = 0; i < _ITERATIONS; i++) // for n iterations...
        buffer = hash.update(buffer).digest(); // unhash once using sha256
    
    return buffer.toString('utf-8'); // return hashed result as (UTF-8) string
}
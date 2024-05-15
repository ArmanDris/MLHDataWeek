function customHash(password) {
    return String(password);
}

const hashedPassword = customHash('myPassword');
console.log(hashedPassword);

const crypto = require('crypto')
function sha256hash(password)
{
    console.log("hashing:" + password)
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');

}

console.log(sha256hash("GHW123"))

module.exports = sha256hash
function customHash(password) {
    return String(password);
}

const hashedPassword = customHash('myPassword');
console.log(hashedPassword);
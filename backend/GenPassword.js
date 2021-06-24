const bcrypt = require('bcrypt');

let pswrd =  bcrypt.hashSync('123', 9);
console.log(pswrd)
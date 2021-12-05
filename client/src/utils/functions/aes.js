var aes256 = require("aes256");

var secret_key = "e702c76beff5270978de97b4c1ee72ef";

export const to_Encrypt = (text) => {
  console.log(text);
  var encrypted = aes256.encrypt(secret_key, text);
  return encrypted;
};

export const to_Decrypt = (cipher, username) => {
  console.log(cipher, username);
  if (cipher.startsWith(username) || cipher.startsWith("Welcome")) {
    return cipher;
  }

  var decrypted = aes256.decrypt(secret_key, cipher);
  return decrypted;
};

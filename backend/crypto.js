const crypto = require("crypto");

const alpha = crypto.createECDH("secp256k1");
const beta = crypto.createECDH("secp256k1");

alpha.generateKeys();
beta.generateKeys();

const alphaPublicKeyBase64 = alpha.getPublicKey().toString("base64");
const betaPublicKeyBase64 = beta.getPublicKey().toString("base64");
const alphaSharedKey = alpha.computeSecret(
  betaPublicKeyBase64,
  "base64",
  "hex"
);
const betaSharedKey = beta.computeSecret(alphaPublicKeyBase64, "base64", "hex");
console.log(alphaSharedKey === betaSharedKey);
console.log("alpha shared key:", alphaSharedKey);

const MESSAGE = "test message";

const IV = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(
  "aes-256-gcm",
  Buffer.from(alphaSharedKey, "hex"),
  IV
);

let encrypted = cipher.update(MESSAGE, "utf8", "hex");
encrypted += cipher.final("hex");

const auth_tag = cipher.getAuthTag().toString("hex");

console.table({
  IV: IV.toString("hex"),
  encrypt: encrypted,
  auth_tag: auth_tag,
});

const payload = IV.toString("hex") + encrypted + auth_tag;
const payload64 = Buffer.from(payload, "hex").toString("base64");
console.log(payload64);

const beta_payload = Buffer.from(payload, "base64").toString("hex");

const beta_iv = beta_payload.substr(0, 32);
const beta_encrypted = beta_payload.substr(32, beta_payload.length - 32 - 32);
const beta_auth_tag = beta_payload.substr(beta_payload.length - 32, 32);

console.table({ beta_iv, beta_encrypted, beta_auth_tag });

import { VirgilCrypto } from 'virgil-crypto';

const vcrypto = new VirgilCrypto();

const k1 = vcrypto.generateKeys();
console.log(k1);
const k2 = vcrypto.generateKeys();
console.log(k2);

const ciphertext = vcrypto.encrypt('hello', k2.publicKey);
console.log(ciphertext.toString('base64'));
console.log(vcrypto.decrypt(ciphertext, k2.privateKey).toString());

const signature = vcrypto.calculateSignature('hello', k1.privateKey);
console.log(signature.toString('base64'));
console.log(vcrypto.verifySignature('hello', signature, k1.publicKey));

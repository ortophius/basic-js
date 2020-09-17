const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  getOffsetMap(keyString) {
    return keyString.toUpperCase().split('').map( char => {
      const code = char.charCodeAt(0);
      if (code > 64 && code < 91) return (code - 65);
      else return 0;
    });
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error('Pls no');
    const offsetMap = this.getOffsetMap(key);
    const res = [];

    for (let i = 0, z = 0; i < text.length; i++) {
      const charCode = text[i].toUpperCase().charCodeAt(0);
      const currentOffset = offsetMap[z];

      let encryptedCharCode;

      if (charCode > 64 && charCode < 91) {
        encryptedCharCode = charCode + currentOffset
        if (encryptedCharCode > 90) encryptedCharCode -= 26;
        z = ++z % offsetMap.length;
      }
      else encryptedCharCode = charCode;

      res.push(String.fromCharCode(encryptedCharCode));
    }

    return (this.isDirect) ? res.join('') : res.reverse().join('');
  }    
  decrypt(text, key) {
    if (!text || !key) throw new Error('Pls no');
    const offsetMap = this.getOffsetMap(key);
    const res = [];

    for (let i = 0, z = 0; i < text.length; i++) {
      const charCode = text[i].toUpperCase().charCodeAt(0);
      const currentOffset = offsetMap[z];

      let encryptedCharCode;

      if (charCode > 64 && charCode < 91) {
        encryptedCharCode = charCode - currentOffset
        if (encryptedCharCode < 65) encryptedCharCode += 26;
        z = ++z % offsetMap.length;
      }
      else encryptedCharCode = charCode;

      res.push(String.fromCharCode(encryptedCharCode));
    }

    return (this.isDirect) ? res.join('') : res.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

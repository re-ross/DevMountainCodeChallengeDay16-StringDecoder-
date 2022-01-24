const stringDecoder = (string) => {
  let splitString = string.split("");
  let decoded = " ";

  for (let i = 0; i < splitString.length; i++) {
    if (!isNaN(+splitString[i])) {
      i += +splitString[i];
    } else {
      decoded += splitString[i];
    }
  }
  return console.log(decoded);
};

stringDecoder("0y4akjfe0s");
stringDecoder("0h2xce5ngbrdy");
stringDecoder("2bna0p1mp2osl0e");

// alternate solution:

// function decoder(str) {
//   const shiftAmt = +str[0]
//   const toDecode = str.slice(1)

//   const strCodesArr = [];

//   let returnStr = '';

//   for (let i = 0; i < toDecode.length; i++) {
//       strCodesArr.push(toDecode.charCodeAt(i))
//   }

//   for (let i = 0; i < strCodesArr.length; i++) {
//       const updatedCode = strCodesArr[i] + shiftAmt;

//       returnStr += String.fromCharCode(updatedCode)
//   }

//   return returnStr;
// }

// decoder('2fcjjm')

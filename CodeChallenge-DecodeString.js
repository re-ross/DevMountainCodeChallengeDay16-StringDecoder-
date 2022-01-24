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

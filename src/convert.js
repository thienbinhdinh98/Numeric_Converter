
export function hexToText(data) {
    let hex = data.toString().replace(/\s/g, "");
    let textFromHex = "";
    for (let n = 0; n < hex.length; n += 2) {
      textFromHex += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return textFromHex;
}

export function hexToDecimal(data){

}

export function hexToBinary(data){
    
}

export function BinaryToHex(data){
    
}

export function BinaryToDecimal(data){

}

export function DecimalToBinary(data){

}

export function DecimalToHex(data){

}

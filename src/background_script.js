

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    
    
})

// function sendReplace(word, translatedText){
//     chrome.addEventListener("click", function(){
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {
//               message: "replace",
//               find: word,
//               replace: translatedText,
//             });
//         });
//     })
// }

// function sendTranslate(){
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {
//           message: "translate"
//         });
//     });
// }

// const replaceOptions = {
//     ReplaceHexString: "Replace Hexadecimal with text",
//     ReplaceHexDecimal: "Replace Hexadecimal with decimal",
//     ReplaceHexBinary: "Replace Hexadecimal with binary",
//     div: "div",
//     ReplaceBinaryHex: "Replace binary with Hexadecimal",
//     ReplaceBinaryDecimal: "Replace binary with decimal",
//     div1: "div",
//     ReplaceDecimalBinary: "Replace decimal with Binary",
//     ReplaceDecimalHex: "Replace decimal with Hexadecimal"
// };


// chrome.runtime.onInstalled.addListener(function () {
//     for (let key of Object.keys(replaceOptions)) {
//       if(replaceOptions[key].startsWith("div")){
//         chrome.contextMenus.create({
//             id: key,
//             type: "separator",
//             contexts: ["selection"],
//         });
//       }else{
//         chrome.contextMenus.create({
//             id: key,
//             title: replaceOptions[key],
//             type: "normal",
//             contexts: ["selection"],
//         });
//       } 
//     }
//   });

// chrome.contextMenus.onClicked.addListener(function (clickData) {
//     //user has to select something already for the drop down menu to appear.
//     let word = clickData.selectionText;
//     switch(clickData.menuItemId){
//         case "ReplaceHexString":
//             //write this the long way for readability
//             sendReplace(word, hexToText(word));
//             break;
//         case "ReplaceHexDecimal":
//             sendReplace(word,hexToDecimal(word));
//             break;
//         case "ReplaceHexBinary":
//             sendReplace(word, hexToBinary(word));
//             break;
//         case "ReplaceBinaryHex":
//             sendReplace(word,BinaryToHex(word));
//             break;
//         case "ReplaceBinaryDecimal":
//             sendReplace(word, BinaryToDecimal(word));
//             break;
//         case "ReplaceDecimalBinary":
//             sendReplace(word,DecimalToBinary(word));
//             break;
//         case "ReplaceDecimalHex":
//             sendReplace(word, DecimalToHex(word));
//             break;
//         default:
//             break;
//     }
// });



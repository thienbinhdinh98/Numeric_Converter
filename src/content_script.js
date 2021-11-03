let find = "";
let replace = "";

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("this run?");
    if(message.message === "replace"){
        find = message.find;
        replace = message.replace;
        console.log(find);
        console.log(replace);
        replaceText(document.body);
    }
    // if(message.message === "translate"){
    //     const word = window.getSelection().toString();
    //     if(word.length > 0){
    //         chrome.runtime.sendMessage({word: word});
    //     }
    // }
})

function replaceText(element){
    if(element.hasChildNode()){
        element.childNodes.forEach(replaceText);
    }else{
        const re = new RegExp(find, "gi");
        element.textContent = element.textContent.replace(re, replace);
    }

}
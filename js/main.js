

var sampleText = "JavaScript is a must-know programming language for a modern developer"

function modifyText(text) {
    
    return {
        result1: text.split(" ").reverse().join(" "),
        result2: text.split("").reverse().join("")
    }
    
}

console.log(modifyText(sampleText));

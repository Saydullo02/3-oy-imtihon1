

var sampleText = "JavaScript is a must-know programming language for a modern developer"

function modifyText(text) {
    
    var newArray = text.split("");
    var result1 = []

    for (var item of text) {
        
        result1.unshift(item);
     
    }
  
    return {
        result2: result1.join("")
    }

}

console.log(modifyText(sampleText));



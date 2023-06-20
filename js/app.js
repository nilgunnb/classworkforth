//TASK-1
let reversestring = [];
function isPalyndrome(x){
    if(typeof x === "string"){
        let chars = x.split("");
        for(i=chars.length-1; i>=0;i--){
            reversestring.push(chars[i]);
        }
        let y = reversestring.join("");
        if(x===y){
            console.log("true");
        }
        else{
            console.log("false")
        }
    }
    else{
        console.log("not a string");
    }
}
isPalyndrome("abba");
//TASK-2

let str = String("microsoft");

let a = str[0];
let b = str[str.length - 1]; // str.length gives the lenght of the string

console.log(str);
console.log(a);
console.log(b);

// ---------------------------------------------------------------------
for(let i = 0; i < str.length; i++){
    let ch = str[i];                    
    console.log(i, ch);
}
// to get each characters

// ---------------------------------------------------------------------

function isPalindrome(num){
    let str = ""+num;
    let i = 0;
    let j = str.length-1;

    while(i <= j){
        if(str[i]==str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
        return true;
    }
}

console.log(isPalindrome(173371));
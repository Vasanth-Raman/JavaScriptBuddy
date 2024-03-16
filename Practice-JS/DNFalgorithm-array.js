/* Given an array which contains only 0's and 1's randomly.
Re-arrange all the 0 before the 1 in the array */

//condition --> don't create new array or use any internal function , traverse only once.

let a = [1,0,0,1,0,1,0,0,0,1,1,0,0];
let i = 0;
let j = a.length-1;

console.log(a.length);



while (i <= j){
    if(a[i] == 0){
        i++;
    }
    else if(a[i] == 1){
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        j--;
    }
}

console.log(a);
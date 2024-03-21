const person = [
    {
        firstName : "Vasanth",
        gender : "male",
        age : 22,
        metaData : {
            address : "Cuddalore",
            phnNo : "1234567890"
        }
    },
    {
        firstName : "Kabi",
        gender : "male",
        age : 21,
        metaData : {
            address : "Cuddalore",
            phnNo : "1234567890"
        }
    },
    {
        firstName : "Valli",
        gender : "female",
        age : 38,
        metaData : {
            address : "Cuddalore",
            phnNo : "1234567890"
        }
    }
]

for(let i = 0; i < person.length; i++){
    if(person[i]["gender"]=="male"){
        console.log(person[i]["firstName"]);
    }
}


// to access element in the object

// in person array, in 0th index, in metaData key, in address key we are accessing the value.
let ans = person[0]["metaData"]["address"];

console.log(ans);
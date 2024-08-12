const newArry = [2,8,34];
console.log(newArry);// Without using spreade oparator;
console.log(...newArry)// using spreade oparator

const sum = (x,y,z)=>{
    return x+ y + z;
}

console.log(sum(...newArry)) //can use an array of in function argument
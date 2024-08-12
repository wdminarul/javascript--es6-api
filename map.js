const numbers ={
    number:[25,87,45,6,73],
    using:'data',
}

for(let i = 0; i < numbers.number.length; i++){
    // console.log(numbers.number[i]);
}

// this work in ES-6 version very to to using map function 

const allNumbers = numbers.number.map((item,index)=>console.log(item,index)
)

// using optional chaining for stop error 
const quaryNumber = numbers?.numbe?.map((item,index)=>console.log(item,index));
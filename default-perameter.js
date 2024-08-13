
//When I use a default perameter then argument not mandetori
function fullName(firstName,lastName="Islam"){
    const name = firstName + lastName;
    return name;
}

console.log(fullName('shimul', 'Rahman'))
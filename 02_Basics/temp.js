var obj1 = {
    name: "Ankur Singh",
    age: Number(24),
    city: "Allahabad"
}

var tempAge = Number (50);
obj1.age = tempAge;

const obj2 = {
    company: "Samsung",
    year:  2023,
    ctc: 7
}

// obj1 = obj2
// obj2 = obj1 ->throw a error

obj2.year = tempAge;

console.log(obj1);
console.log(obj2);
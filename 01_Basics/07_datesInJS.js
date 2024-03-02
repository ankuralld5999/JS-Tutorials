// Dates

let myDate = new Date();
console.log(myDate);
console.log("toString: " + myDate.toString());
console.log("toDateString: " + myDate.toDateString());
console.log("toISOString: " + myDate.toISOString());
console.log("toJSON: " + myDate.toJSON());
console.log("toLocalDateString: " + myDate.toLocaleDateString());
console.log("toLocalString: " + myDate.toLocaleString());
console.log("toLocalTimeString: " + myDate.toLocaleTimeString);

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
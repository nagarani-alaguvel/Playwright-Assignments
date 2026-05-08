// Task 1: Function Declaration
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("Nagarani");

// Task 2: Arrow Function
const double = (num) => {
    return num * 2;
};

console.log("Double Value:", double(5));

// Task 3: Anonymous Function with setTimeout
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Task 4: Callback Function
function getUserData(callback) {
    setTimeout(() => {
        callback("Call Back Function");
    }, 3000);
}

getUserData((message) => {
    console.log(message);
});

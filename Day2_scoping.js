// Understanding Scoping
let genderType = "female";

function printGender() {
    let color = "brown";

    if (genderType.startsWith("female")) {
        var age = 30;
        let color = "pink";
        console.log("Inside block color:", color);
    }

    console.log("Outside block color:", color);
    console.log("Age:", age);
}

printGender();
console.log("Gender:", genderType);

genderType = "male";
printGender();

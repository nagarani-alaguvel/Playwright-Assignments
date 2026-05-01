// var vs let vs const
const browserName = "Chrome";

function getBrowserName() {
    if (browserName === "Chrome") {
        let browserName = "Firefox";
        console.log("Inside block:", browserName);
    }
    console.log("Outside block:", browserName);
}

getBrowserName();

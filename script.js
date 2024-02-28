function convertToRoman(num) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let input = document.getElementById("number").value;
    let output = document.getElementById("output");

    num = input;
    if (num === "") {
        output.innerHTML = "Please enter a valid number.";
    } else if (num < 1) {
        output.innerHTML = "Please enter a number greater than or equal to 1";
    } else if (num > 3999) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
    } else {
        let str = "";

        for (let key in roman) {
            while (num >= roman[key]) {
                str += key;
                num -= roman[key];
            }
        }

        output.innerHTML = str;
    }
}

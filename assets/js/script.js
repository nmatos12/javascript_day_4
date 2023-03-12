function calc(num1 ,num2, operator) {
    if (operator === '+') {
        return num1 + num2; 
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    }
}

var sum = calc(5, 10)
var diff = calc(5, 10)
var product = calc(5, 10)

console.log(sum);
console.log(diff);
console.log(product);

//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//     }
// }



function subtract (num1, num2) {
    return num1 - num2;
}

var diff1 = subtract(10, 5)
var diff2 = subtract(3, 1)

console.log(diff2)

// var diff = subtract ();
// console.log(returnedVal);

// diff(5, 10);


// function myFunc(num, str) {
//     console.log(num);
// }

// myFunc(10, 'another');


// var sloppyData = ['Natalie', 'wrestling', 1, 0, 'drawing']

 var data = {
     name: 'Natalie',
     sport: 'wrestling',
     pets: 1,
     kids: 0,
     hobby: 'drawing',
     printName: function () {
        console.log(this.name);
     }
};

data.printName();

// console.log(data.name);

// var nums = [10, 3, 100, 500, 50, 75, 45];
// var str = 'some string';

// console.log(Array.isArray(nums));
// nums.forEach(function (item, index) {
//     console.log(item, index);
// }



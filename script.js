// let js = "fun";
// if (js === "fun") console.log("yes it is fun");
// let h1 = document.write('<h1 id="fofo">hello</h1>');
// document.getElementById("fofo").style.color = "green";
// document.getElementById("fofo").style.color = "orange";

// assignments 10-17

// num 1

// let numberOne, numberTwo;
// numberOne = 10;
// numberTwo = 20;
// let num3 = numberOne + "" + numberTwo;

// console.log(numberOne + "" + numberTwo);
// console.log(num3);
// console.log(typeof num3);
// console.log(`${numberOne}${numberTwo}`);
// console.log(`${numberOne}\n${numberTwo}`);
// console.log(numberOne +'\n'+ numberTwo);

// num 2

// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object


// num 3

// let a = 21;
// let b = 20;

// console.log("Write Your Code Here"); // _21_2021_2021_2021_20_

// lesson 17 challenge 

let  titleName, desc,date;
titleName = "title elzero";
desc = "elsero web school";
date = '23/5';

let card = `
  <div>
    <h3>${titleName}</h3>
    <p>${desc}</p>
    <span>${date}</span>
  </div>
`;
document.write(card.repeat(4))

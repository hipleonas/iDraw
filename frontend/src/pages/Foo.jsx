import React, { useEffect } from 'react';

function Foo() {
   
    
    

}

export default Foo;


/** Lesson 5
5.Type conversion
bool   => string
string => number
number => string

source code
    let age = windows.prompt("Enter age: "); (20)
    age += 1;
    => console.log(age) =>result = (201) because age is recognize as a string
    Fixed:
    let age = Number(windows.prompt("Enter age: ")); (20)

    let x = "pizza";
    let y = "pizza";
    let z = "pizza";

    x = Number(x);  => Nan, number
    y = String(y);  => pizza, string
    z = Boolean(z); => true, boolean (Every string other than empty string will return true)


    let x = "";
    let y = "";
    let z = "";

    x = Number(x);  => 0, number
    y = String(y);  => , string
    z = Boolean(z); => false, boolean (Every string other than empty string will return true)
*/

/*Lesson 8: program counter
useEffect(()=>{
        const countBoard = document.getElementById("numberBoard");
        
        document.getElementById("decBtn").onclick = () =>{
            countBoard.textContent = Number(countBoard.textContent) - 1;
        }
        document.getElementById("resetBtn").onclick = () =>{
            countBoard.textContent = Number("0");
        }
        document.getElementById("incrBtn").onclick = () =>{
            countBoard.textContent = Number(countBoard.textContent) + 1;
        }
    },[])
  
    return(
        <div>

            <div id = "numberBoard">0</div>
            <button id = "decBtn">Dec</button>
            <button id = "resetBtn">Reset</button>
            <button id = "incrBtn">Incr</button>
        </div>
    )
*/

/*Lesson 9: Random Number
const min = 200
const max =  1000

let randomNumber = Math.floor(Math.random() * N) + offset =>Get the random number from [0->N-1]
Math.floor to ensure the float will be round down to be integer
offset : every random number will be added offset time
let randomNumber = Math.floor(Math.random() * N) + 1  => [1, N]
*/

/*Lesson 14: String method
let username = "Brocode"
username.charAt(i) //Find the char at the index ith of the string
username.indexOf(char c) find the index of the first occurent character c 
username.lastindexOf(char c)
username.replaceAll("-", " ") replace all the symbol "-" with " "
username.padStart(15, "0") padd this string with 0 until 15 characters long in length
*/
/*Lesson 15:
let username = window.prompt("Enter username: ");
    //Trim any whitespace of the uppercase
    username = username.trim(); //Delete all the whitespace at the beg or end
    let letter = username.charAt(0);
    letter = letter.toUpperCase();
    let extraChars = username.slice(1); //get the rest of the character except the first one at index 0
    extraChars = extraChars.toLowerCase();

    username = letter + extraChars;
    return(
        <div>
            <p>{username}</p>
        </div>
    );
 * 
 */
/* Lesson 18 :Strict Equality
    use strict equality to compare the value and the datatype
    const Pi = 3.14;
    if(Pi == "3.14"){
        console.log("This is Pi");
    }else{
        console.log("This is not Pi");
    }
    //The answer will give "This is Pi" because it only compare the value not the data type

    if(Pi === "3.14"){
        console.log("This is Pi");
    }else{
        console.log("This is not Pi");
    }
    //The answer will give "This is not Pi" because the it compare both the datatype and the variable since one is string and the other is number the statement is false
    

    
    if(Pi != "3.14"){
        console.log("This is Pi");
    }else{
        console.log("This is not Pi");
    }

    if(Pi != "3.14"){
        console.log("This is not Pi");
    }else{
        console.log("This is Pi");
    }
    //The answer will give "This is Pi"
    * 
*/

/*Lesson 26 + 27: spread and rest operators in js
//Spread operator allow an iterable such as an array or string to be expanded
into seprated element (unpack the element)


    let fruits = ["apple", "avocado","pearl"];
    let veggie = ["tomato","lettuce"]
    //Combine array
    let foods = ["chocolate",...fruits, ... veggie , "eggs", "milk"];
    //u can also add variable into the array
Rest operator allows a function work with a variable number of 
argument and bundle them into the array
function openFridge(...foods){
    //The ...foods takes any amount of paramenter as an array
openFridge("apple","chicken","beef",....)
}

function calSum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = calSum(1,2,3,4,5,100,...)
    */


/*Lesson 28:Dice roller

const rollDice = () =>{
        console.log("Roll dice has been called\n");
      
            const images = [];
            const dices = [];
            const numDice =Number( document.getElementById("numDice").value);
            const diceResult = document.getElementById("diceResult");
            const diceImg = document.getElementById("diceImg");
            console.log(typeof numDice, numDice);
            for(let i = 0; i < numDice; i++){
                const index = Math.floor(Math.random() * 6) + 1;
                // console.log(`The value of the ${i}th dice: ${index}`);
                dices.push(index);   
                images.push(`<img src = "dice_images/${index}.png >"`); //Addd the link of each image
            }
            diceResult.textContent = dices.join(",");
            diceImg.innerHTML = images.join();
    }
    return (
        <div id = "container">
            <h1>Dice Roller</h1>
            <label>Number of Dice: </label>
            <input type = "number" id = "numDice"defaultValue={10} min = "1"></input>
            <button onClick={rollDice}>Roll Dice</button>
            <div id = "diceResult"></div>
            <div id = "diceImg"></div>
        </div>
    );
*/

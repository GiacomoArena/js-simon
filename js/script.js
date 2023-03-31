const output = document.querySelector('#num');
let blackList = []
let randomNum ;
let popUpMsg;
let arrayRandomNum = []
let arrayNum = []


for (let i = 0; i < 5; i++) {
randomNum = uniqueRandomNum(blackList, 1, 100).toString()
arrayRandomNum.push(randomNum)
console.log(arrayRandomNum);
setTimeout(function() {
  output.innerHTML =  " ";
}, 2000); 
output.innerHTML += randomNum + "-";


}



setTimeout(function() {
  popUpMsg = prompt("Inserisci i numeri")
  arrayNum = popUpMsg.split(',');
  let counter = 0
  for (let i = 0; i < arrayNum.length; i++) {
    
    if (arrayRandomNum.includes(arrayNum[i])) {
    counter++
  }
  }
  if (counter === 5 ) {
    console.log(`Bravo hai indovinato tutti i numeri, sei fortissimo!1!1`);
  }
  else{
    console.log(`bravo hai indovinato ${counter} su 5 numeri `);
  }

console.log(arrayNum);
},3000); 




/*or (var i = 0; i < arrayNumStr.length; i++) {
  arrayNum.push(parseInt(arrayNumStr[i]));*/










function uniqueRandomNum(blackList, min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min +1)+min);

  while (blackList.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min +1)+min);
  }
  blackList.push(randomNumber);

  return randomNumber;
}
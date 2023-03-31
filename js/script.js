const output = document.querySelector('#num');
const button = document.querySelector('button');
const result = document.getElementById('result')
let blackList = []
let randomNum ;
let popUpMsg;
let arrayRandomNum = []
let arrayNum = []

button.addEventListener('click', function(){
  result.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    randomNum = uniqueRandomNum(blackList, 1, 100).toString()
    arrayRandomNum.push(randomNum)
    console.log(arrayRandomNum);
    setTimeout(function() {
      output.innerHTML =  " ";
    }, 5000); 
    output.innerHTML += randomNum + "-";
    }
    
    
    
    setTimeout(function() {
      popUpMsg = prompt("Inserisci i numeri suddivisi da uno spazio")
      arrayNum = popUpMsg.split(' ');
      let counter = 0
      for (let i = 0; i < arrayNum.length; i++) {
        
        if (arrayRandomNum.includes(arrayNum[i])) {
        counter++
      }
      }
      if (counter === 5 ) {
        result.innerHTML = `Bravo hai indovinato tutti i numeri, sei fortissimo !1!1`; 

        console.log(`Bravo hai indovinato tutti i numeri, sei fortissimo !1!1`);
      }
      else if(counter === 0){
        result.innerHTML =`Mi spiace ma non E andata bene, 0 su 5`

        console.log(`Mi spiace ma non E andata bene, 0 su 5`);
      }
      else{
        result.innerHTML =`bravo hai indovinato ${counter} su 5 numeri `

        console.log(`bravo hai indovinato ${counter} su 5 numeri `);
      }
    
    console.log(arrayNum);
    },6000); 

})



function uniqueRandomNum(blackList, min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min +1)+min);

  while (blackList.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min +1)+min);
  }
  blackList.push(randomNumber);

  return randomNumber;
}
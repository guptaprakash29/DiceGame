const randomNumber1 = Math.floor(Math.random() * 6) +1;
console.log(randomNumber1);


const Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", `/images/dice${randomNumber1}.png`)

const randomNumber2 = Math.floor(Math.random() * 6) +1;
console.log(randomNumber2);


const Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src", `/images/dice${randomNumber2}.png`);


const heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins"
} else  if (randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 Wins"
}else{
    heading.innerHTML = "Draw"
}

alert("Prakash gupta is a Developer of This repo")
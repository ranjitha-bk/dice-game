var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 +=1;
var randomImgSrc1 = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImgSrc1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 +=1;
var randomImgSrc2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);


 document.querySelector("h1").innerHTML = winning();


function winning(){
  if(randomNumber1 > randomNumber2){
    return "🥇Player 1 wins";
  }else if(randomNumber2>randomNumber1){
    return "Player 2 wins🥇";
  }else{
    return "Draw";
  }
}

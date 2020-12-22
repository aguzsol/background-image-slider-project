  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];


const buttonLeft = document.querySelector('.btn-left')
const buttonRight = document.querySelector('.btn-right')
var change = document.querySelector('.img-container')
var counter=0;

console.log(buttonRight)
console.log(buttonLeft)
console.log(change)

function nextImg(e) {
  if (e.target.id == 'btn-right'){
    counter++
    if(counter > pictures.length-1){
      counter=0
    }
  }
  else{
    if(counter <= 0){
      counter=4
    }
    else{
      counter--
    }
  }
  change.style.backgroundImage = "url(../img/"+ pictures[counter] + ".jpeg)"
  console.log(counter)
}

buttonLeft.addEventListener('click', nextImg)
buttonRight.addEventListener('click', nextImg)
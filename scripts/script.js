var card = document.querySelector(".filling");
var body = document.querySelector(".card-body");
var background = document.querySelector(".weight")
var cardhead = document.querySelector(".card-head");
var cardcorner = document.querySelector(".card-corner")
var description = document.getElementById('fff')
var link = document.getElementById('buy')

function changeText() {
  if (card.classList.contains('filling','lolo')) {
    description.innerHTML='Чего сидишь?';
  } else {
    console.log('dura');
  }
}


card.addEventListener("click", function(event) {
  event.preventDefault();
  if (card.classList.contains('filling')) {
    body.classList.toggle("border-color");
    background.classList.toggle("background-color");
    cardhead.classList.toggle("border-color2");
    cardcorner.classList.toggle("stas");
    description.classList.add('active');
    card.classList.toggle('selected');
    card.classList.add('lolo');
  }



});


/*if (element.classList.contains('card')) {
  console.log('Stas is super');
}
else {
  console.log('Debil');
}

console.log(element.classList.contains('card'));*/

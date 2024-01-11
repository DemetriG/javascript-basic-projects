const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//JS BELOW
btn.addEventListener('click', function(){
//     get random number between 0 -3
    const randomNumber = getRandomNumber();
    // set the colour
    document.body.style.backgroundColor = colors[randomNumber];
     // display the colour name
     color.textContent = colors[randomNumber];

})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
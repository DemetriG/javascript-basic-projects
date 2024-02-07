//set counter to 0
let count = 0;

//set value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn")

//for each button, check the class
btns.forEach(function (btn){
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        //based on the class perform an action
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }
        //change colour of 'counter' based on the number
        if (count > 0) {
            value.style.color = "green"
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "black"
        }
        value.textContent = count;
    });
});
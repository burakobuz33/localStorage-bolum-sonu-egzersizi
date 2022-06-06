// localStorage Bolum Sonu Egzersizi

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let deacreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
deacreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    if (this.id == "increase") {

        counterDOM.innerHTML = counter += 1
    } else {
        counterDOM.innerHTML = counter -= 1
    }


}
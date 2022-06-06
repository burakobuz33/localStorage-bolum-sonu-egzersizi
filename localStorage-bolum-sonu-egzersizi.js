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
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter

}
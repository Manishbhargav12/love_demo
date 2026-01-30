// let display = document.querySelector('#display')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')

function add(input) {
    display.value += input
}
btn1.addEventListener('click', clear)
btn2.addEventListener('click', exp)

function clear() {
    display.value = display.value.slice(0, -1)
}

function cleardisplay() {
    display.value = ""
}

function calculate() {
    let a = eval(display.value)
    display.value = a
}

function exp() {
    a = "manish world and"
    console.log(a.split(' ', 2))
        //     if (a == '+') {
        //         clear()
        //         add()

    //     }
    // }

}
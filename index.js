let btn = document.querySelector('button')
function calculator() {
   let a = +prompt("a")
   let m = prompt('+ - * /')
   let b = +prompt('b')

   if (m === '-') {
      alert(
         a - b
      );
   }



   else if (m === '+') {
      alert(
         a + b
      );
   }



   else if (m === '*') {
      alert(
         a * b
      );
   }



   else if (m === "/") {
      alert(
         a / b
      );
   }
}
btn.onclick = () => {
   calculator()
}


// N2
let button = document.querySelector('.amount')
function total() {
   let amount = +prompt("amount")
   let fakeAmount = +prompt('fake')

   let percent = (fakeAmount * 100) / amount
   alert(percent + '%');

}
button.onclick = () => {
   total()
}


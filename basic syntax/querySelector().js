/*

querySelector(  ) é um método que retorna o primeiro 
elemento dentro do documento que corresponde ao seletor.

querySelectorAll(  ) retorna todos os elementos 
dentro do documento que correspondem ao seletor.

*/

const li = document.querySelectorAll('li')

li.forEach((item) => {
    item.classList.add('item')
})

console.log(li)

const classItem01 = document.querySelector(".item").style.color = "blue"
const classItem03 = document.querySelector('#item03').style.backgroundColor = "red"


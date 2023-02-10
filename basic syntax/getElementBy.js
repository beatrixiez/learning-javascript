// getElementById(  ) é um método que retorna o elemento que possui a ID especificada como sua propriedade.
const listTitle = document.getElementById("title");
listTitle.style.color = "blue";
console.log(listTitle);

//ByClassName: exibindo um elemento no console ao colocar seu valor em uma variável após requisição via nome da classe
const className = document.getElementsByClassName('item');
console.log(className)

//ByTagName: exibindo um elemento no console ao colocar seu valor em uma variável após requisição via nome da tag
const tagName = document.getElementsByTagName('ul')
console.log(tagName)
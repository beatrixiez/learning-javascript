const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `Seu nome é: <b>${nome}</b><br>`;
document.body.innerHTML += `Seu nome tem: <b>${nome.length}</b> caracteres <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <b>'${nome.charAt(1)}'</b> <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <b>'${nome.slice(-3)}'</b> <br>`;
document.body.innerHTML += `As palavras do seu nome são: <b>${nome.split(' ')}</b> <br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <b>${nome.toUpperCase()}</b> <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <b>${nome.toLowerCase()}</b> <br>`;
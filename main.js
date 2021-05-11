//Ex1
let ex1 = document.getElementsByTagName('h1')[1].innerText;
console.log(ex1);

//Ex2
let ex2 = document.getElementsByTagName('li')[3].innerText;
console.log(ex2);

//Ex3
let ex3 = document.getElementsByTagName('p')[0].innerText.toUpperCase()

console.log(ex3);

//Ex4 HTML collection n'est pas considéré comme Array par le forEach. Ajout de Array.from pour se faire. 
let ex4 = Array.from(document.getElementsByTagName('li'));
console.log(ex4);
ex4.forEach(element => {
    console.log(element.innerText.toUpperCase());
});

//For fun
document.getElementsByTagName('h1')[0].style.color = 'pink'

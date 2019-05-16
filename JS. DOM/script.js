//1. Дан элемент #elem. Добавьте ему класс "www".
//2. Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс.

 let classList = document.getElementById("elem").classList;
 	classList.add("www");
 if (classList.contains("www") == true) {
	classList.remove("www");
}
	console.log(document);

//3. Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, 
//а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body.

function recursiveSearchTags(document, d) {
    return document.querySelectorAll("#elem");
}
console.log(recursiveSearchTags(document.body, "div"));

//4. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// Сделайте так, чтобы четные позиции имели красный фон.

let arrLi = [1, 2, 3, 4, 5, 6, 7];
let ul = document.querySelector("ul");
for (let i = 1; i <= arrLi.length; i++) {
	let li = document.createElement('li');
	li.innerHTML = i;
	ul.appendChild(li);
	if (!(i % 2)) {
		li.setAttribute("style","background-color: red; width: 200px");
	}
}
console.log(ul);

//5. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

let el = document.getElementById("elem").previousElementSibling.firstElementChild;
el.innerHTML = el.innerHTML + "!";
console.log(el);

//6. Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

function wrapInParagraph(el) {
  	let home = document.body.children[1].children[0];
  	let newTag = document.createElement("p");
	document.body.children[1].children[0].innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  	console.log(home);
}
wrapInParagraph();

//7. Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице. 
//В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter

function normalizeClassNames() {
    let str = document.querySelectorAll("*");
    	for(let i = 0; i < str.length;i++) {
    		 str[i].className = str[i].className.split("-").map(function(item, index){
    			return (index != 0) 
    			? item[0].charAt(0).toLocaleUpperCase() + item.substr(1)
    			: item.charAt(0).toLowerCase() + item.substr(1);   			 
        	}).join("");
    	}
}
	console.log(normalizeClassNames(document));

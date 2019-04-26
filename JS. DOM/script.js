//1, 2

 let classList = document.getElementById("elem").classList;
 	classList.add("www");
 if (classList.contains("www") == true) {
	classList.remove("www");
}
	console.log(document);

//3

function recursiveSearchTags(document, d) {
    return document.querySelectorAll("#elem");
}
console.log(recursiveSearchTags(document.body, "div"));

//4

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

//5

let el = document.getElementById("elem").previousElementSibling.firstElementChild;
el.innerHTML = el.innerHTML + "!";
console.log(el);

//6

function wrapInParagraph(el) {
  	let home = document.body.children[1].children[0];
  	let newTag = document.createElement("p");
	document.body.children[1].children[0].innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  	console.log(home);
}
wrapInParagraph();

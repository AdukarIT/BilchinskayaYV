//1

let parent = document.getElementById("parent");
document.getElementById("button").addEventListener("click", function (e) {
	let inp = document.getElementById("double");
	let clone = inp.cloneNode(true);
	parent.appendChild(clone);
});

//2

let table = document.createElement("table"), tr;
function createTable() {
table.border = "1";
	for (let row = 0; row < 4; row++) {
		tr = document.createElement("tr");
 	for (let cell = 0; cell < 6; cell++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = row * 6 + cell + 1;
   	}
    	table.appendChild(tr);
	}
	document.getElementById("container").appendChild(table);
	
}
createTable();

table.addEventListener("click", function(e) {
	if (!table.className) {
		table.className = "bordered";
	} else if (table.classList.contains("bordered")) {
		table.className = "striped";
	} else if(table.classList.contains("striped")) {
		table.className = "highlight";
	}
});

//3

let form = document.getElementById("container").appendChild(document.createElement("form"));
form.style.margin = "15px";
    form.innerHTML  += '<label><input type="radio" name="changeClass" id = "radioB" />' + 1 + "</label>";
    form.innerHTML  += '<label><input type="radio" name="changeClass" id = "radioB2" />' + 2 + "</label>";
    form.innerHTML  += '<label><input type="radio" name="changeClass" id = "radioB3" />' + 3 + "</label>";
	let changeBut1 = document.getElementById("radioB"),
	changeBut2 = document.getElementById("radioB2"),
	changeBut3 = document.getElementById("radioB3");

form.addEventListener("click", function(e) {
	if(changeBut1.checked) {
		table.className = "bordered";
	} else if (changeBut2.checked) {
		table.className = "striped";
	} else {
		table.className = "highlight";
	}
});

//4

let textButton = document.body.appendChild(document.createElement("button"));
let button2 = document.body.appendChild(document.createElement("button"));
textButton.innerHTML = "blablabla";
button2.innerHTML = "disable";

 function text(){
    alert(this.innerHTML);
}
textButton.addEventListener("click", text);
button2.onclick = function() {
	textButton.removeEventListener("click", text) 
};

 //5

let form2 = document.body.appendChild(document.createElement("form"));
form2.innerHTML = "form";
form2.className = "form2";
let div = form2.appendChild(document.createElement("div"));
div.innerHTML = "div";
div.className = "div";
let par = div.appendChild(document.createElement("p"));
par.innerHTML = "p";
par.className = "p";
let but = div.appendChild(document.createElement("button"));
but.innerHTML = "button";
but.className = "button";
let a2 = but.appendChild(document.createElement("a"));
a2.innerHTML = "a";
a2.className = "a";
let arrTeg = [div, par, but, a2];
for (let i = 0; i < arrTeg.length; i++) {
  arrTeg[i].setAttribute("style", "display: inline-block; margin-left: 20px;")
  form2.appendChild(arrTeg[i]);
}
form2.addEventListener("click", function(e) {
  alert(e.target.tagName);
});

//6

let img = document.body.appendChild(document.createElement("img"));
img.src = "img/6.jpg";
img.setAttribute("style", "height: 350px; width: 350px;");
img.addEventListener("mouseover", function() {
  this.src = "img/4.jpg";
});
img.addEventListener("mouseout", function() {
  this.src = "img/6.jpg";
});

//7 (есть вопросик)

let picture = document.body.appendChild(document.createElement("img"));
picture.src = "img/2.jpg";
picture.className = "click";

picture = document.querySelectorAll(".click");
let backPop = document.getElementById("backPop"),
	popUp = document.getElementById("popUp"),
	bigImg= document.getElementById("bigImg");

[].forEach.call(picture, function(elem) {
  let src = elem.getAttribute("src");
  elem.onclick = function() { 
    bigImg.setAttribute("src", src);
    backPop.style.display = "block";
  }
});
backPop.onclick = function(elem){
  if(!(elem.target.closest("#popUp"))) {
      backPop.style.display = "none";
     }    
}
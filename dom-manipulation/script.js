
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent="This is the glorious text-content.";
container.appendChild(content);

const red = document.createElement("p");
red.style.color = "red";
red.textContent="I am red.";
container.appendChild(red);

const blue = document.createElement("h3");
blue.style.color = "blue";
blue.textContent ="I am  blue.";
container.appendChild(blue);

const divelement = document.createElement("div");
divelement.style.backgroundColor = "pink";
divelement.style.borderStyle="solid";
divelement.style.borderColor = "black";

const divh1 = document.createElement("h1");
divh1.textContent = "I'm a div.";
const divp = document.createElement("p");
divp.textContent = "Me too!"; 

divelement.appendChild(divh1);
divelement.appendChild(divp);
container.appendChild(divelement);

const btn = document.querySelector("#btn");
btn.style.color="red";
btn.onclick = () => alert ("Hello World");

btn.addEventListener('click', function (e) {
    console.log(e);
  });

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () =>{
    alert("Hello World"); 
})

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  const btn3 = document.querySelector("#btn3");
  // METHOD 2
  btn3.onclick = alertFunction;
  
  const btn4 = document.querySelector("#btn4");
  // METHOD 3
  btn4.addEventListener('click', alertFunction);

//Attaching listeners to groups of nodes

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
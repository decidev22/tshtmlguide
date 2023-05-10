let title = document.querySelector("#title");

//in JS we used to do it like below...

//title.innerHTML = 'Hi'
//however, you will get an error related to union to null.
//Therefore, we need to narrow the type.

//First way of narrowing down
if (title != null) {
  title.innerHTML = "Hi";
}

//second way of narrowing down
if (title instanceof Element) {
  //object(title) is child of instance(Element)
  title.innerHTML = "Hi";
}

//third way of narrowing down, but not recommended.
//don't use 'as' if you don't know what you want to achieve by doing this.
let title_ = document.querySelector("#title") as Element;
title_.innerHTML = "Hi";

//fourth way of narrowing down
//we are simply checking null of object. if null => undefined
if (title?.innerHTML) {
  title.innerHTML = "Hi";
}

//fifth way of narrowing down
//don't use strictNullChecks in tsconfig. and delete TypeScript, because you just killed purpose of using typescript!

let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://github.com/decidev22";
}

//Element type is not very well defined out of the box.
//We need to use... HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement...
//and then we can use the object as it is defined in the Element we need access to.
//so, if <button> then HTMLButtonElement, <h1> HTMLHeadingElement... and so on.

let button = document.querySelector("#button");
button?.addEventListener("click", function () {
  if (!button) {
    return;
  }
  button.innerHTML = "Button2";
});

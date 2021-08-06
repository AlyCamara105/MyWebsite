let homeButton = document.querySelector("#homebutton");
let projectsButton = document.querySelector("#projectsbutton");

let pagebody = document.querySelector("#pagebody");

homeButton.onclick = function (event) {
    event.preventDefault();

    homeButton.style.backgroundColor = "#cce6f1";
    homeButton.style.borderRadius = "50%";
    projectsButton.style.backgroundColor = "#1e81b0";
    projectsButton.style.borderRadius = "15px";
    
    pagebody.innerHTML = "";
    pagebody.style.display = "flex";

    let img = document.createElement("img");
    img.setAttribute("id","portrait");
    img.src = "images/portrait.jpg";

    let div = document.createElement("div");
    div.setAttribute("id","pagetext");

    let text = document.createElement("p");
    text.innerHTML = "My name is Aly. I am apart of the All Star 2021 Summer Intensive. Welcome to my Website.";

    div.appendChild(text);

    pagebody.appendChild(img);
    pagebody.appendChild(div);
}

projectsButton.onclick = function (event) {
    event.preventDefault();

    projectsButton.style.backgroundColor = "#cce6f1";
    projectsButton.style.borderRadius = "50%";
    homeButton.style.backgroundColor = "#1e81b0";
    homeButton.style.borderRadius = "15px";

    pagebody.innerHTML = "";
    pagebody.style.display = "block";

    h1 = document.createElement("h1");
    h1.innerHTML = "Projects";

    h1.style.textAlign = "center";
    h1.style.color = "#76b5c5";
    h1.style.border = "5px solid #1e81b0";
    h1.style.borderRadius = "15px";
    h1.style.backgroundColor = "#154c79";

    p1 = document.createElement("p");
    p1.innerHTML = "Welcome to my projects page! Here you will see coding projects I have worked on in All Star Code."

    pagebody.appendChild(h1);
    pagebody.appendChild(p1);
}
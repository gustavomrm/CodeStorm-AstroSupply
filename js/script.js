var btnHamburguer = document.getElementById("hamburguer");
var menuNav = document.getElementById("menuNav");

if (btnHamburguer) {
    btnHamburguer.addEventListener("click", function () {
        btnHamburguer.classList.toggle("aberto");
        menuNav.classList.toggle("aberto");
    });
}

var linksNav = document.querySelectorAll("nav a");
linksNav.forEach(function (link) {
    link.addEventListener("click", function () {
        if (btnHamburguer) btnHamburguer.classList.remove("aberto");
        if (menuNav) menuNav.classList.remove("aberto");
    });
});

var paginaAtual = window.location.pathname.split("/").pop();

var todosLinks = document.querySelectorAll("nav a");
todosLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === paginaAtual || (paginaAtual === "" && href === "index.html")) {
        link.classList.add("ativo");
    }
});
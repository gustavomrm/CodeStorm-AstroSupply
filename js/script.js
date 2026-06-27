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
var titulosPerguntas = document.querySelectorAll(".pergunta-titulo");

titulosPerguntas.forEach(function (titulo) {
    titulo.addEventListener("click", function () {
        var resposta = this.nextElementSibling;

        titulosPerguntas.forEach(function (outro) {
            if (outro !== titulo) {
                outro.classList.remove("aberta");
                outro.nextElementSibling.style.display = "none";
            }
        });

        this.classList.toggle("aberta");

        if (resposta.style.display === "block") {
            resposta.style.display = "none";
        } else {
            resposta.style.display = "block";
        }
    });
});
var formulario = document.getElementById("formContato");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        var nome = document.getElementById("nome").value.trim();
        var email = document.getElementById("email").value.trim();
        var mensagem = document.getElementById("mensagem").value.trim();
        var msgErro = document.getElementById("msgErro");
        var msgSucesso = document.getElementById("msgSucesso");

        msgErro.style.display = "none";
        msgSucesso.style.display = "none";

        if (nome === "" || email === "" || mensagem === "") {
            msgErro.style.display = "block";
            return;
        }

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            msgErro.textContent = "Digite um e-mail válido.";
            msgErro.style.display = "block";
            return;
        }

        msgSucesso.style.display = "block";
        formulario.reset();
    });
}
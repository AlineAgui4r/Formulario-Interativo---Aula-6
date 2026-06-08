form.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const campoIdade = document.getElementById("campoIdade").value;

    if (nome.trim() === "") {
        event.preventDefault();  
        erro.textContent = "O nome é obrigatório!";
        erro.style.color = "red";
    }

    if (!email.includes("@")) {
        event.preventDefault();
        erro.textContent = "E-mail inválido!";
        

}
    if (campoIdade >= 0); {
    event.preventDefault();
    erro.textContent = "Idade invalida!";

    }
    
    


});

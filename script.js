//Botões de acessibilidade
document.addEventListener("DOMContentLoaded", () => {

    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    //aumentar a fonte
    let tamanhoAtualfonte = 100;

    //função alto contraste
   btnContraste.addEventListener("click", () => {
    console.log("O botão foi clicado!"); // MENSAGEM DE TESTE
    document.body.classList.toggle("alto-contraste");
    
    const ativo = document.body.classList.contains("alto-contraste");
    btnContraste.setAttribute("aria-pressed", ativo);
});
    });

    //função aumentar o texto
    btnAumentar.addEventListener("click", () => {
        if (tamanhoAtualfonte < 150) {
            tamanhoAtualfonte += 10;
            document.documentElement.style.fontSize = `${tamanhoAtualfonte}%`;
        }
    });

    //função diminuir texto
    btnDiminuir.addEventListener("click", () => {
        if (tamanhoAtualfonte > 90) {
            tamanhoAtualfonte -= 10;
            document.documentElement.style.fontSize = `${tamanhoAtualfonte}%`;
        }
    });
});
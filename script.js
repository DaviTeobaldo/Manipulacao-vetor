document.addEventListener("DOMContentLoaded", function () {
    const inputN = document.getElementById("inputN");
    const btnInserir = document.getElementById("btnInserir");
    const btnMostrarValores = document.getElementById("btnMostrarValores");
    const btnMostrarMaior = document.getElementById("btnMostrarMaior");
    const btnMostrarMenor = document.getElementById("btnMostrarMenor");
    const btnModal = document.getElementById("btnModal");
    const modalInserirValores = new bootstrap.Modal(document.getElementById("modalInserirValores"));
    const modalFinal = new bootstrap.Modal(document.getElementById("modalFinal"));
    const instrucao = document.getElementById("instrucao")

    let valores = [];
    let currentIndex = 0;

    btnInserir.addEventListener("click", () => {
        const n = parseInt(inputN.value);
        valores = new Array(n);
        currentIndex = 0;
        instrucao.innerHTML = `Digite o valor para a ${currentIndex+1}ª posição: `
        modalInserirValores.show();
    });

    btnInserirModal.addEventListener("click", () => {
        const inputValue = parseInt(document.getElementById("inputModal").value);
        valores[currentIndex] = inputValue;
        currentIndex++;
        instrucao.innerHTML = `Digite o valor para a ${currentIndex+1}ª posição: `
        document.getElementById("inputModal").value = "";
        if (currentIndex === valores.length) {
            modalInserirValores.hide();
            modalFinal.show();
        }
    });

    

    btnMostrarValores.addEventListener("click", () => {
        valores.sort();
        document.getElementById("valoresInseridos").textContent = valores.join(", ");
    });

    btnMostrarMaior.addEventListener("click", () => {
        const maior = Math.max(...valores);
        document.getElementById("maiorValor").textContent = maior;
    });

    btnMostrarMenor.addEventListener("click", () => {
        const menor = Math.min(...valores);
        document.getElementById("menorValor").textContent = menor;
    });

    btnFecharModalFinal.addEventListener("click", () => {
        modalFinal.hide();
    });
});

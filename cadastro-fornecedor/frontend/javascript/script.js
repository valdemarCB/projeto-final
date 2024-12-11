// script.js

// Aguarda o carregamento completo do DOM antes de adicionar os event listeners
document.addEventListener("DOMContentLoaded", () => {
  
  // Event listener para o botão "Voltar"
  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", voltar);
  }

  // Validação adicional para o formulário de fornecedor
  const form = document.getElementById("form-fornecedor");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita o envio do formulário para controle

      // Aqui você pode adicionar mais validações se necessário

      // Exibe um alerta para simular a conclusão do cadastro
      alert("Cadastro realizado com sucesso!");

      // Reseta os campos do formulário após o envio
      form.reset();
    });
  }

});
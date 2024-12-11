// script.js

// Função para voltar à página anterior
function voltar() {
    window.history.back();
  }
  
  // Event listener para o botão "Voltar"
  document.getElementById("btn-voltar").addEventListener("click", voltar);
  
  // Validação adicional para o formulário de produto
  const formProduto = document.getElementById("form-produto");
  
  formProduto.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o envio do formulário para controle
    alert("Produto cadastrado com sucesso!");
    formProduto.reset(); // Limpa os campos do formulário após o envio
  });  
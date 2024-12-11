// script.js

// Função para voltar à página anterior
function voltar() {
    window.history.back();
  }
  
  // Event listener para o botão "Voltar"
  document.getElementById("btn-voltar").addEventListener("click", voltar);
  
  // Manipulação do formulário de associação
  const formAssociar = document.getElementById("form-associar-fornecedor");
  const tabelaFornecedores = document.getElementById("tabela-fornecedores");
  
  formAssociar.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const fornecedorSelecionado = document.getElementById("fornecedor");
    const fornecedorTexto = fornecedorSelecionado.options[fornecedorSelecionado.selectedIndex].text;
    const fornecedorCnpj = fornecedorTexto.match(/\((CNPJ: .+?)\)/)[1];
  
    // Adiciona o fornecedor na tabela
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td>${fornecedorTexto.split(' (')[0]}</td>
      <td>${fornecedorCnpj}</td>
      <td><button class="btn-desassociar">Desassociar</button></td>
    `;
    tabelaFornecedores.appendChild(novaLinha);
  
    // Limpa a seleção do dropdown
    fornecedorSelecionado.value = "";
  });
  
  // Event listener para desassociar fornecedores
  tabelaFornecedores.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-desassociar")) {
      event.target.closest("tr").remove();
    }
  });  
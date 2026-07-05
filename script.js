
let total = 0;            
let quantidade = 0;       
let contaFechada = false; 


const formulario      = document.getElementById("formDespesa");
const campoDescricao  = document.getElementById("descricao");
const campoValor      = document.getElementById("valor");
const mensagemErro    = document.getElementById("mensagemErro");
const botaoEncerrar   = document.getElementById("botaoEncerrar");
const botaoReiniciar  = document.getElementById("botaoReiniciar");

const listaItens      = document.getElementById("listaItens");
const avisoVazio      = document.getElementById("avisoVazio");
const totalParcial    = document.getElementById("totalParcial");
const blocoTotalFinal = document.getElementById("blocoTotalFinal");
const totalFinal      = document.getElementById("totalFinal");
const quantidadeItens = document.getElementById("quantidadeItens");
const dataCupom       = document.getElementById("dataCupom");
const rotuloMes       = document.getElementById("rotuloMes");


const formatoBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const agora = new Date();
dataCupom.textContent = agora.toLocaleDateString("pt-BR");
rotuloMes.textContent = "Despesas de " +
  agora.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });


formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede o recarregamento da página
  if (contaFechada) return;

  const valor = parseFloat(campoValor.value);

  
  if (isNaN(valor) || valor < 0) {
    mostrarErro("Informe um valor válido (número maior ou igual a 0).");
    return;
  }


  if (valor === 0) {
    fecharConta();
    return;
  }


  total += valor;
  quantidade++;


  const descricao = campoDescricao.value.trim() || "despesa " + quantidade;
  adicionarLinhaCupom(descricao, valor);
  totalParcial.textContent = formatoBRL.format(total);

 
  mostrarErro("");
  formulario.reset();
  campoDescricao.focus();
});


botaoEncerrar.addEventListener("click", function () {
  if (!contaFechada) fecharConta();
});


function fecharConta() {
  contaFechada = true;

  totalFinal.textContent = formatoBRL.format(total);
  quantidadeItens.textContent =
    quantidade + (quantidade === 1 ? " item registrado" : " itens registrados");
  blocoTotalFinal.hidden = false;


  campoDescricao.disabled = true;
  campoValor.disabled = true;
  botaoEncerrar.disabled = true;
  formulario.querySelector(".botao-principal").disabled = true;
  botaoReiniciar.hidden = false;
  mostrarErro("");
}


botaoReiniciar.addEventListener("click", function () {
  total = 0;
  quantidade = 0;
  contaFechada = false;

  listaItens.innerHTML = "";
  listaItens.appendChild(avisoVazio);
  avisoVazio.hidden = false;

  totalParcial.textContent = formatoBRL.format(0);
  blocoTotalFinal.hidden = true;
  botaoReiniciar.hidden = true;

  campoDescricao.disabled = false;
  campoValor.disabled = false;
  botaoEncerrar.disabled = false;
  formulario.querySelector(".botao-principal").disabled = false;
  formulario.reset();
  campoDescricao.focus();
});


function adicionarLinhaCupom(nome, valor) {
  avisoVazio.hidden = true;

  const item = document.createElement("li");

  const spanNome = document.createElement("span");
  spanNome.className = "nome";
  spanNome.textContent = nome;

  const spanPreco = document.createElement("span");
  spanPreco.className = "preco";
  spanPreco.textContent = formatoBRL.format(valor);

  item.appendChild(spanNome);
  item.appendChild(spanPreco);
  listaItens.appendChild(item);
}

function mostrarErro(texto) {
  mensagemErro.textContent = texto;
}
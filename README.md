💰 Controle de Despesas do Mês

Aplicação web simples de controle financeiro pessoal. O usuário registra suas despesas uma a uma (mercado, transporte, lazer...) e, ao encerrar, o sistema exibe o total gasto no mês — tudo apresentado em um cupom fiscal estilizado, como se fosse impresso em uma impressora térmica.


Projeto de estudo: implementação em página web de um algoritmo clássico de soma com acumulador e valor sentinela.



🧠 O algoritmo por trás do projeto

A lógica implementada corresponde a este algoritmo em linguagem natural:


Comece com o total igual a 0.
Solicite um valor de despesa ao usuário.
Enquanto esse valor for diferente de 0:

a. Adicione o valor ao total.
b. Peça o próximo valor.



Quando o valor informado for 0, mostre o total acumulado.


O número de despesas não é conhecido antecipadamente: o 0 funciona como valor sentinela, sinalizando o fim da entrada de dados. Na versão web, cada envio do formulário equivale a uma iteração do laço enquanto.

✨ Funcionalidades


Registro de despesas com descrição opcional e valor
Soma automática com total acumulado atualizado em tempo real
Encerramento ao digitar 0 no valor ou clicar em Fechar conta
Total final com contagem de itens, exibido no cupom
Valores formatados em reais (R$) com Intl.NumberFormat
Validação de entradas inválidas
Botão para iniciar uma nova lista do zero
Layout responsivo (desktop e celular)


🛠️ Tecnologias


HTML5 — estrutura da página
CSS3 — tema de cupom fiscal (borda serrilhada com clip-path, variáveis CSS, animações)
JavaScript puro (vanilla) — lógica do acumulador e manipulação do DOM, sem frameworks


📁 Estrutura do projeto

controle-despesas/
├── index.html   → estrutura da página
├── style.css    → estilos e tema de cupom fiscal
├── script.js    → lógica do acumulador e interação
└── README.md    → este arquivo

🚀 Como executar

Não precisa instalar nada. Basta:


Baixar ou clonar este repositório:


bash   git clone https://github.com/SEU-USUARIO/controle-despesas.git


Abrir o arquivo index.html em qualquer navegador moderno.


📖 Como usar


Digite a descrição da despesa (opcional) e o valor.
Clique em Adicionar despesa (ou pressione Enter) — a despesa é impressa no cupom.
Repita para quantas despesas quiser.
Para encerrar, digite 0 no campo de valor ou clique em Fechar conta.
O total do mês aparece no cupom. Use Começar nova lista para recomeçar.


📄 Licença

Projeto livre para fins de estudo. Sinta-se à vontade para usar, modificar e compartilhar.
# Desafio Técnico - Lógica e Backend (Node.js)

Repositório desenvolvido para aplicação prática de lógica de programação, manipulação de estruturas JSON, tratamento de datas e regras de negócio utilizando **Node.js (JavaScript)**.

---

## 🛠️ Estrutura do Projeto

O projeto está dividido em três módulos independentes:

1. **Cálculo de Comissões (`comissoes.js`)**
   - Lê os registros de vendas da equipe comercial em formato JSON.
   - Aplica faixas condicionais de comissão:
     - Vendas abaixo de R$ 100,00: **0%**
     - Vendas abaixo de R$ 500,00: **1%**
     - Vendas a partir de R$ 500,00: **5%**
   - Agrupa e exibe o resumo consolidado de vendas e comissões por vendedor.

2. **Controle de Estoque (`estoque.js`)**
   - Gerencia o estoque de produtos com base em um catálogo inicial em JSON.
   - Permite lançar movimentações de **entrada** e **saída** utilizando identificador único (`idMovimento`) e descrição.
   - Valida o saldo disponível para evitar estoques negativos e gera logs detalhados das operações.

3. **Cálculo de Juros por Atraso (`juros.js`)**
   - Calcula os juros e o valor total atualizado de faturas vencidas com base em uma taxa de multa diária de **2,5%**.
   - Utiliza a data de referência estipulada (`05/10/2026`) para contabilizar os dias de atraso e valida faturas com vencimento em dia ou futuro.

---

## 🚀 Como Executar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

No terminal, navegue até a pasta do projeto e execute o arquivo desejado:

```bash
# Executar o cálculo de comissões
node comissoes.js

# Executar o controle de estoque
node estoque.js

# Executar o cálculo de juros
node juros.js# desafio-logica-backend

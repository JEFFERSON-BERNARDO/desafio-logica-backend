const sistemaEstoque = {
    "estoque": [
      { "codigoProduto": 101, "descricaoProduto": "Caneta Azul", "estoque": 150 },
      { "codigoProduto": 102, "descricaoProduto": "Caderno Universitário", "estoque": 75 },
      { "codigoProduto": 103, "descricaoProduto": "Borracha Branca", "estoque": 200 },
      { "codigoProduto": 104, "descricaoProduto": "Lápis Preto HB", "estoque": 320 },
      { "codigoProduto": 105, "descricaoProduto": "Marcador de Texto Amarelo", "estoque": 90 }
    ],
    "movimentacoes": [] 
  };
  
  
  function registrarMovimentacao(idMovimento, codigoProduto, tipo, quantidade, descricao) {
   
    const produto = sistemaEstoque.estoque.find(p => p.codigoProduto === codigoProduto);
  
    if (!produto) {
      console.log(`Erro: Produto com código ${codigoProduto} não encontrado!`);
      return;
    }
  
    
    if (tipo === "entrada") {
      produto.estoque += quantidade;
    } else if (tipo === "saida") {
     
      if (produto.estoque < quantidade) {
        console.log(`Erro: Estoque insuficiente para o produto ${produto.descricaoProduto}. Saldo atual: ${produto.estoque}`);
        return;
      }
      produto.estoque -= quantidade;
    } else {
      console.log("Erro: Tipo de movimentação inválido! Use 'entrada' ou 'saida'.");
      return;
    }
  
    
    sistemaEstoque.movimentacoes.push({
      idMovimento,
      codigoProduto,
      produto: produto.descricaoProduto,
      tipo,
      quantidadeMovimentada: quantidade,
      descricaoMovimentacao: descricao,
      estoqueFinal: produto.estoque
    });
  
    console.log(`Sucesso! Movimentação [ID: ${idMovimento}] registrada.`);
    console.log(`Produto: ${produto.descricaoProduto} | Novo Saldo em Estoque: ${produto.estoque}\n`);
  }
  

  
  console.log("=== INICIANDO CONTROLE DE ESTOQUE ===\n");
  
 
  registrarMovimentacao(1, 101, "entrada", 50, "Reposição de estoque de canetas");
  

  registrarMovimentacao(2, 102, "saida", 15, "Venda balcão - Pedido #402");
  

  registrarMovimentacao(3, 105, "saida", 10, "Uso interno do escritório");
  

  console.log("=== ESTOQUE ATUALIZADO DOS PRODUTOS ===");
  console.log(sistemaEstoque.estoque);
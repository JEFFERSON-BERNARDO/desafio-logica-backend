const dadosVendas = {
    "vendas": [
      { "vendedor": "João Silva", "valor": 1200.50 },
      { "vendedor": "João Silva", "valor": 950.75 },
      { "vendedor": "João Silva", "valor": 1800.00 },
      { "vendedor": "João Silva", "valor": 1400.30 },
      { "vendedor": "João Silva", "valor": 1100.90 },
      { "vendedor": "João Silva", "valor": 1550.00 },
      { "vendedor": "João Silva", "valor": 1700.80 },
      { "vendedor": "João Silva", "valor": 250.30 },
      { "vendedor": "João Silva", "valor": 480.75 },
      { "vendedor": "João Silva", "valor": 320.40 },
      
      { "vendedor": "Maria Souza", "valor": 2100.40 },
      { "vendedor": "Maria Souza", "valor": 1350.60 },
      { "vendedor": "Maria Souza", "valor": 950.20 },
      { "vendedor": "Maria Souza", "valor": 1600.75 },
      { "vendedor": "Maria Souza", "valor": 1750.00 },
      { "vendedor": "Maria Souza", "valor": 1450.90 },
      { "vendedor": "Maria Souza", "valor": 400.50 },
      { "vendedor": "Maria Souza", "valor": 180.20 },
      { "vendedor": "Maria Souza", "valor": 90.75 },
      
      { "vendedor": "Carlos Oliveira", "valor": 800.50 },
      { "vendedor": "Carlos Oliveira", "valor": 1200.00 },
      { "vendedor": "Carlos Oliveira", "valor": 1950.30 },
      { "vendedor": "Carlos Oliveira", "valor": 1750.80 },
      { "vendedor": "Carlos Oliveira", "valor": 1300.60 },
      { "vendedor": "Carlos Oliveira", "valor": 300.40 },
      { "vendedor": "Carlos Oliveira", "valor": 500.00 },
      { "vendedor": "Carlos Oliveira", "valor": 125.75 },
      
      { "vendedor": "Ana Lima", "valor": 1000.00 },
      { "vendedor": "Ana Lima", "valor": 1100.50 },
      { "vendedor": "Ana Lima", "valor": 1250.75 },
      { "vendedor": "Ana Lima", "valor": 1400.20 },
      { "vendedor": "Ana Lima", "valor": 1550.90 },
      { "vendedor": "Ana Lima", "valor": 1650.00 },
      { "vendedor": "Ana Lima", "valor": 75.30 },
      { "vendedor": "Ana Lima", "valor": 420.90 },
      { "vendedor": "Ana Lima", "valor": 315.40 }
    ]
  };
  
  
  function calcularComissao(valorVenda) {
    
    if (valorVenda < 100.00) {
      return 0;
    } 
   
    else if (valorVenda < 500.00) {
      return valorVenda * 0.01;
    } 
    
    else {
      return valorVenda * 0.05;
    }
  }
  

  const relatorioVendedores = {};
  
 
  dadosVendas.vendas.forEach(venda => {
    const { vendedor, valor } = venda;
    const comissao = calcularComissao(valor);
  
   
    if (!relatorioVendedores[vendedor]) {
      relatorioVendedores[vendedor] = {
        totalVendasBrutas: 0,
        totalComissao: 0,
        quantidadeVendas: 0
      };
    }
  
    
    relatorioVendedores[vendedor].totalVendasBrutas += valor;
    relatorioVendedores[vendedor].totalComissao += comissao;
    relatorioVendedores[vendedor].quantidadeVendas += 1;
  });
  
  
  console.log("== RELATÓRIO DE COMISSÕES DA EQUIPE COMERCIAL ==\n");
  
  for (let vendedor in relatorioVendedores) {
    const dados = relatorioVendedores[vendedor];
    console.log(`Vendedor(a): ${vendedor}`);
    console.log(` - Qtd de Vendas: ${dados.quantidadeVendas}`);
    console.log(` - Total Vendido: R$ ${dados.totalVendasBrutas.toFixed(2)}`);
    console.log(` - Total de Comissão: R$ ${dados.totalComissao.toFixed(2)}`);
    console.log("--------------------------------------------------");
  }
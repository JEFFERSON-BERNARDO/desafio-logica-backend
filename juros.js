
function calcularJurosAtraso(valorOriginal, dataVencimentoStr) {
   
    const dataHoje = new Date('2026-10-05');
    const dataVencimento = new Date(dataVencimentoStr);
  
    
    if (isNaN(dataVencimento.getTime())) {
      console.log("Erro: Data de vencimento inválida. Use o formato 'AAAA-MM-DD'.");
      return;
    }
  
  
    const diferencaEmMilissegundos = dataHoje - dataVencimento;
  
    
    const diasAtraso = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
  
    
    if (diasAtraso <= 0) {
      console.log(`Fatura em dia ou vencimento futuro. Nível de atraso: 0 dias.`);
      console.log(`Valor a pagar: R$ ${valorOriginal.toFixed(2)}\n`);
      return;
    }
  
    
    const taxaDiaria = 0.025;
    
    
    
    const valorJuros = valorOriginal * taxaDiaria * diasAtraso;
    const valorTotalAtualizado = valorOriginal + valorJuros;
  
    
    console.log("=== RELATÓRIO DE CÁLCULO DE JUROS ===");
    console.log(`- Valor Original da Fatura: R$ ${valorOriginal.toFixed(2)}`);
    console.log(`- Data de Vencimento: ${dataVencimentoStr}`);
    console.log(`- Data de Referência (Hoje): 2026-10-05`);
    console.log(`- Dias em Atraso: ${diasAtraso} dia(s)`);
    console.log(`- Multa/Juros Aplicados (2.5% a.d.): R$ ${valorJuros.toFixed(2)}`);
    console.log(`- VALOR TOTAL ATUALIZADO: R$ ${valorTotalAtualizado.toFixed(2)}`);
    console.log("----------------------------------------\n");
  }
  

  calcularJurosAtraso(500.00, '2026-09-25');
  

  calcularJurosAtraso(1250.50, '2026-09-10');

  calcularJurosAtraso(800.00, '2026-10-10');
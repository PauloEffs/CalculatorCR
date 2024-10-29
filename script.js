const formatarMoeda = (valor) => {
  return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });
};

const validarCampos = (valorConta, qualidadeServico) => {
  if (valorConta === '' || valorConta <= 0){
      alert('Por favor insira um valor válido para a conta.');
      return false;
  }
  if (qualidadeServico === ''){
      alert('Por favor selecione a qualidade do serviço.')
      return false
  }

  return true;
};

const calcularGorjeta = () => {
  const valorConta = document.getElementById('valorConta').value;
  const qualidadeServico = document.getElementById('qualidadeServico').value;
  const resultadoDiv = document.getElementById('resultado');

  if (!validarCampos(valorConta, qualidadeServico)){
      return;
  }

  const valorContaNumero = parseFloat(valorConta);
  const qualidadeServicoNumero = parseFloat(qualidadeServico);

  const gorjeta = valorContaNumero * qualidadeServicoNumero;
  const total = valorContaNumero + gorjeta;
    

resultadoDiv.innerHTML = ` 
<strong> Resumo do pagamento: </strong><br/>
Valor da conta: ${formatarMoeda(valorContaNumero)}<br>
      Gorjeta: ${formatarMoeda(gorjeta)}<br>
      Total a pagar: ${formatarMoeda(total)}
  `;
resultadoDiv.style.display = 'block';
};
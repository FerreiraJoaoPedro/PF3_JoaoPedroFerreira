const calcular = document.getElementById('calcular');

	function calculo () {

	
		const nome = document.getElementById('nome').value;
		const p = document.getElementById('p').value;
		const taxaJuros = document.getElementById('i').value;
		const n = document.getElementById('n').value;
		const resultado = document.getElementById('resultado');

	const i = taxaJuros/100;


	if(nome !== '' && p !== '' && taxaJuros !== '' && n !== ''){
		const VF = (p*((((1+i)**n)-1)/i)).toFixed(2);
		resultado.textContent = nome+ ', se você aplicar R$ '+p+' à taxa de juros de '+taxaJuros+ '% ao mês, durante '+n+' meses, acumulará uma poupança de R$ '+VF;
	}

	else{
		resultado.textContent = 'Por favor, preencha todos os campos!';
	}
}

	calcular.addEventListener('click', calculo);
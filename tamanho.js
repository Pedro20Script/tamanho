
function botao() {
	div = document.createElement('div');
	let h1 = document.querySelector('h1')
	let h2 = document.querySelector('h2')
	let h3 = document.querySelector('h3')
	let h4 = document.querySelector('h4')
	let h5 = document.querySelector('h5')
	let h6 = document.querySelector('h6')
	if (h1 != null) {
		h1.value = 22
		botao = document.createElement('button');
		botao.textContent = "+"
		botao.setAttribute('onclick', 'mudaTamanho("h1", "+");')
		div.appendChild(botao)
		botao2 = document.createElement('button');
		botao2.textContent = "-"
		botao2.setAttribute('onclick', 'mudaTamanho("h1", "-");')
		div.appendChild(botao2)
		h1.after(div)
}	else if (h2 != null) {
		h2.value = 22
		botao = document.createElement('button');
		botao.textContent = "+"
		botao.setAttribute('onclick', 'mudaTamanho("h2", "+");')
		div.appendChild(botao)
		botao2 = document.createElement('button');
		botao2.textContent = "-"
		botao2.setAttribute('onclick', 'mudaTamanho("h2", "-");')
		div.appendChild(botao2)
		h2.after(div)
	}	else if (h3 != null) {
		h3.value = 22
		botao = document.createElement('button');
		botao.textContent = "+"
		botao.setAttribute('onclick', 'mudaTamanho("h3", "+");')
		div.appendChild(botao)
		botao2 = document.createElement('button');
		botao2.textContent = "-"
		botao2.setAttribute('onclick', 'mudaTamanho("h3", "-");')
		div.appendChild(botao2)
		h3.after(div)
	}	else if (h4 != null) {
		h2.value = 22
		botao = document.createElement('button');
		botao.textContent = "+"
		botao.setAttribute('onclick', 'mudaTamanho("h4", "+");')
		div.appendChild(botao)
		botao2 = document.createElement('button');
		botao2.textContent = "-"
		botao2.setAttribute('onclick', 'mudaTamanho("h4", "-");')
		div.appendChild(botao2)
		h4.after(div)
	}	else if (h5 != null) {
		h5.value = 22
		botao = document.createElement('button');
		botao.textContent = "+"
		botao.setAttribute('onclick', 'mudaTamanho("h5", "+");')
		div.appendChild(botao)
		botao2 = document.createElement('button');
		botao2.textContent = "-"
		botao2.setAttribute('onclick', 'mudaTamanho("h5", "-");')
		div.appendChild(botao2)
		h5.after(div)
	}	else if (h6 != null) {
		h6.value = 22
		botao = document.createElement('button');
		botao.textContent = "+"
		botao.setAttribute('onclick', 'mudaTamanho("h6", "+");')
		div.appendChild(botao)
		botao2 = document.createElement('button');
		botao2.textContent = "-"
		botao2.setAttribute('onclick', 'mudaTamanho("h6", "-");')
		div.appendChild(botao2)
		h6.after(div)
	}
}

function mudaTamanho(tipo, valor) {
	objeto = document.querySelector(`${tipo}`)
	if (valor == "+") {
		if (objeto.value < 100) {
		objeto.value += 10;
		x = objeto.value
		objeto.setAttribute('style', `font-size:${x}px`);
		}
		
		
	} else {
		if (objeto.value > 10) {
		objeto.value -= 10;
		x = objeto.value
		objeto.setAttribute('style', `font-size:${x}px`);
		}
	}
}

botao();



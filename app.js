// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres
var listaNombres = [];

var inputNombre = document.getElementById('amigo');
var listaVisual = document.getElementById('listaAmigos');
var resultado = document.getElementById('resultado');

// Función para actualizar la lista visual
function actualizarLista() {
	listaVisual.innerHTML = '';
	listaNombres.forEach(function(nombre) {
		var li = document.createElement('li');
		li.textContent = nombre;
		listaVisual.appendChild(li);
	});
}

// Función para agregar amigo (usada por el botón)
function agregarAmigo() {
	var nombre = inputNombre.value.trim();
	if (nombre === '') {
		alert('Por favor, ingresa un nombre válido.');
		return;
	}
	listaNombres.push(nombre);
	inputNombre.value = '';
	actualizarLista();
}

// Función para sortear amigo (usada por el botón)
function sortearAmigo() {
	resultado.innerHTML = '';
	if (listaNombres.length === 0) {
		alert('Agrega al menos un nombre antes de sortear.');
		return;
	}
	var indice = Math.floor(Math.random() * listaNombres.length);
	var li = document.createElement('li');
	li.textContent = 'El amigo secreto es: ' + listaNombres[indice];
	resultado.appendChild(li);
}


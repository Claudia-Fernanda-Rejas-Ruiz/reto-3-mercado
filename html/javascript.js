class miClase {
	constructor(primero, segundo){
		this.uno = primero;
		this.dos = segundo;
		this.tres = "Hola" 
	};

	miMetodoUno(){
		return this.uno;
	};
	miMetodoDos(parametroUno, parametroDos){
		document.write(
			"El parámetro uno es: "+ parametroUno +
			"Parametro dos es: "+ parametroDos
			);
	};
};

class miClaseDos extends miClase{
	constructor(uno, dos cuarto){
		super(uno, dos)
		this.cuatro= cuarto;
	}
};

var miClaseTres = new miClaseDos("Miguel", "Goncales", "55");
document.write(  ObjetoTres.uno );
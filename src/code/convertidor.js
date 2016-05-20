var Convertidor = function(){
	this.convertirACelcius = function(fahrenheit){
		console.log(fahrenheit);
		if (typeof fahrenheit === 'number') {
			return Number(((fahrenheit-32) * 5/9).toFixed(2));
		} else if (fahrenheit === undefined) {
			return 'ingrese un numero';
		} else {
			return 'error de formato';
		}
	}
}
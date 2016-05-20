

var precio = parseInt(Math.round(""));
var pais = ("").toLowerCase();

var Calcular = function(){
	this.descuento = function(precio){
		if (precio === "" || precio === 0) {
			return 'Ingrese el precio del producto'
		}
		else if (precio < 0) {
			return 'Agregue un valor correcto';
		}
		else if (precio < 10000) {
			var valorConDescuento = Math.round(precio*0.93);
			return valorConDescuento;
		}
		else if (precio < 15000) {
			var valorConDescuento = Math.round(precio*0.9);
			return valorConDescuento;
		}
		else if (precio < 25000) {
			var valorConDescuento = Math.round(precio*0.88);
			return valorConDescuento;
		}
		else if (precio < 50000) {
			var valorConDescuento = Math.round(precio*0.85);
			return valorConDescuento;
		}
		else if (precio >= 50000) {
			var valorConDescuento = Math.round(precio*0.8);
			return valorConDescuento;
		}
		else {
			return 'Agregue el valor del producto';
		}
	}

	this.iva = function(pais){
		if (pais === "") {
			return 'Ingrese un país';
		} else if (pais == "colombia"){
			return parseInt(Math.round(valorConDescuento*1.16));
		} else if (pais == "argentina") {
			return Math.round(valorConDescuento*1.05);
		} else if (pais === "chile"){
			return parseInt(Math.round(valorConDescuento*1.12));
		}else {
			return 'input incorrecto, ingrese un país';
		}
	}
}

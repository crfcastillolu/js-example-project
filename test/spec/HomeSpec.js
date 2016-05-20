describe("Calcular precio con descuento", function() {
  var calcularDescuento;

  beforeEach(function() {
    calcularDescuento = new Calcular();
  });


  describe("Cuando el valor es menor a 10000 aplico un 7% de descuento", function() {

    it("un producto con un valor de -10000.9999 debe imprimir 'Agregue un valor correcto'", function() {
      var resultado = calcularDescuento.descuento("-10000.9999")
      expect(resultado).toBe('Agregue un valor correcto');
    });

    it("un producto con un valor de 379 debe tener el 7% de descuento y quedar en 352", function() {
      var resultado = calcularDescuento.descuento("379")
      expect(resultado).toBe(352);
    });

    it("un producto con un valor de '' debe imprimir 'Ingrese el precio del producto'", function() {
      var resultado = calcularDescuento.descuento('')
      expect(resultado).toBe('Ingrese el precio del producto');
    });

    it("un producto con un valor de 'lima' debe imprimir 'Ingrese el precio del producto'", function() {
      var resultado = calcularDescuento.descuento('lima')
      expect(resultado).toBe('Agregue el valor del producto');
    });

  });

  describe("Cuando el valor es entre 10000 y 14999 aplico un 10% de descuento", function() {

    it("un producto con un valor de 10000 debe tener el 10% de descuento y quedar en 9000", function() {
      var resultado = calcularDescuento.descuento(10000)
      expect(resultado).toBe(9000);
    });

    it("un producto con un valor de 12731 debe tener el 10% de descuento y quedar en 11458", function() {
      var resultado = calcularDescuento.descuento("12731")
      expect(resultado).toBe(11458);
    });

  });

  describe("Cuando el valor es entre 15000 y 24999 aplico un 12% de descuento", function() {

    it("un producto con un valor de 17777 debe tener el 12% de descuento y quedar en 15644", function() {
      var resultado = calcularDescuento.descuento(17777)
      expect(resultado).toBe(15644);
    });

    it("un producto con un valor de 15000 debe tener el 12% de descuento y quedar en 13200", function() {
      var resultado = calcularDescuento.descuento("15000")
      expect(resultado).toBe(13200);
    });

  });


  beforeEach(function() {
    calcularIva = new Calcular();
  });

  describe("Cuando el país es Colombia se aplica el 16% de iva", function() {


    it("un producto con un valor de 2500 debe tener el 7% de descuento y quedar en 2325", function() {
      valorConDescuento = calcularDescuento.descuento(2500)
      expect(valorConDescuento).toBe(2325);
    });

    it("un producto con un valor de 2325 debe tener el 12% de iva y quedar en 2604", function() {
      var resultado = calcularDescuento.iva(pais)
      expect(resultado).toBe(2604);
    });

  });


});

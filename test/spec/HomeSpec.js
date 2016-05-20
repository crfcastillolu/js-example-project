describe("Convertidor de grados", function() {
  var miConvertidor;

  beforeEach(function() {
    miConvertidor = new Convertidor();
  });


  describe("cuando convierto de fahrentheit a celcius", function() {

    it("los grados F son -50, deben ser -45.5556 celcius", function() {
       resultado = miConvertidor.convertirACelcius(-50);
       expect(-45.56).toBe(resultado);
     });

     it("los grados F son 'hola', deben ser 'error de formato'", function() {
       resultado = miConvertidor.convertirACelcius('hola');
       expect('error de formato').toBe(resultado);
     });
     it("los grados F son es vacio, deben ser 'ingrese un numero'", function() {
       resultado = miConvertidor.convertirACelcius();
       expect("ingrese un numero").toBe(resultado);
     });

});
});

Multiplicação simples

console.log(`PROD = ${+gets() * +gets()}`);
----------------//-----------------------
Inicializadores de objetos.

  let g1 = +gets();
  let g2 = +gets();
  _consumo = {g1};
  __consumo = {g2};
  console.log(`PROD = ${_consumo.g1 * __consumo.g2}`);

---------------//------------------------

Código feito usando Obejct.create();

 multiplicar = {
  
  gets1: +gets(),
  gets2: +gets(),
  resultado: function(){
    console.log("PROD = " + this.gets1 * this.gets2);
  }
}
  display = Object.create(multiplicar);
  display.resultado();






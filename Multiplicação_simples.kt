Multiplicação simples

console.log(`PROD = ${+gets() * +gets()}`);

---------------//------------------------

Código feito usando Obejct.create();
Lembrando que na plataforma não aceita.

 multiplicar = {
  
  gets1: +gets(),
  gets2: +gets(),
  resultado: function(){
    console.log("PROD = " + this.gets1 * this.gets2);
  }
}
  display = Object.create(multiplicar);
  display.resultado();






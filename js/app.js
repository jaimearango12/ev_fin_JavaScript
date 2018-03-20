var calculadora =(function operaciones(){

  function seleccionBoton(){
    document.getElementsByClassName('tecla').style="width 18%;";
  }
  document.getElementsByClassName('tecla').onclick=seleccionBoton;

})

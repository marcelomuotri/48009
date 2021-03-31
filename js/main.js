var negro1 = $("#imagenNegra1")
var imagen1 = $("#imagen")
var negro2 = $("#imagenNegra2")
var imagen2 = $("#imagenDos")
var negro3 = $("#imagenNegra3")
var imagen3 = $("#imagenTres")
var negro4 = $("#imagenNegra4")
var imagen4 = $("#imagenCuatro")
var negro5 = $("#imagenNegra5")
var imagen5 = $("#imagenCinco")
var negro6 = $("#imagenNegra6")
var imagen6 = $("#imagenSeis")
var negro7 = $("#imagenNegra7")
var imagen7 = $("#imagenSiete")
var negro8 = $("#imagenNegra8")
var imagen8 = $("#imagenOcho")
var negro9 = $("#imagenNegra9")
var imagen9 = $("#imagenNueve")

function fotoAparecer (imagen, imagenNegra){
    $(imagen).css("display", "none")
    $(imagenNegra).css("display", "flex")
   }


   function fotoAparecer2 (imagen,imagenNegra){
    $(imagen).show()
    $(imagenNegra).css("display", "none")
   }


   //primera foto
$("#parateHover").mouseover(AparecerNegro1)
function AparecerNegro1(){
    fotoAparecer(imagen1,negro1)
}

$("#parateHover").mouseout(AparecerNegro2)
function AparecerNegro2(){
    fotoAparecer2(imagen1,negro1)
}

//segunda foto
$("#parateHoverDos").mouseover(AparecerNegro3)
function AparecerNegro3(){
   fotoAparecer(imagen2,negro2)
   }
   
$("#parateHoverDos").mouseout(AparecerNegro4)
function AparecerNegro4(){
   fotoAparecer2(imagen2,negro2)
   }
   
//tercera foto
$("#parateHoverTres").mouseover(AparecerNegro5)
function AparecerNegro5(){
   fotoAparecer(imagen3,negro3)
   }
   
$("#parateHoverTres").mouseout(AparecerNegro6)
function AparecerNegro6(){
   fotoAparecer2(imagen3,negro3)
   }

//cuarta foto
$("#parateHoverCuatro").mouseover(AparecerNegro7)
function AparecerNegro7(){
   fotoAparecer(imagen4,negro4)
   }

$("#parateHoverCuatro").mouseout(AparecerNegro8)
function AparecerNegro8(){
   fotoAparecer2(imagen4,negro4)
   }

//quinta foto
$("#parateHoverCinco").mouseover(AparecerNegro9)
function AparecerNegro9(){
   fotoAparecer(imagen5,negro5)
   }

$("#parateHoverCinco").mouseout(AparecerNegro10)
function AparecerNegro10(){
   fotoAparecer2(imagen5,negro5)
   }


//sexta foto
$("#parateHoverSeis").mouseover(AparecerNegro11)
function AparecerNegro11(){
   fotoAparecer(imagen6,negro6)
   }

$("#parateHoverSeis").mouseout(AparecerNegro12)
function AparecerNegro12(){
   fotoAparecer2(imagen6,negro6)
   }

//septima foto
$("#parateHoverSiete").mouseover(AparecerNegro13)
function AparecerNegro13(){
   fotoAparecer(imagen7,negro7)
   }
   
$("#parateHoverSiete").mouseout(AparecerNegro19)
function AparecerNegro19(){
   fotoAparecer2(imagen7,negro7)
   }

   //octava foto

$("#parateHoverOcho").mouseover(AparecerNegro14)
function AparecerNegro14(){
   fotoAparecer(imagen8,negro8)
   }

$("#parateHoverOcho").mouseout(AparecerNegro15)
function AparecerNegro15(){
   fotoAparecer2(imagen8,negro8)
   }

   //novena foto
$("#parateHoverNueve").mouseover(AparecerNegro16)
function AparecerNegro16(){
  fotoAparecer(imagen9,negro9)
      }

$("#parateHoverNueve").mouseout(AparecerNegro17)
function AparecerNegro17(){
  fotoAparecer2(imagen9,negro9)
      }


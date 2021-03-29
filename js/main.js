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




   /* 
$("#parateHover").mouseover(prueba)

function prueba (){
    $("#imagen").css("display", "none")
    $("#imagenNegra1").css("display", "flex")

}

$("#parateHover").mouseout(prueba2)
function prueba2 (){

    $('#imagen').show()
    $("#imagenNegra1").css("display", "none")

} */
























/* var texto1 = $("#textoImagen")
var imagen1 = $("#imagen")
var texto2 = $("#textoImagenDos")
var imagen2 = $("#imagenDos")
var texto3 = $("#textoImagenTres")
var imagen3 = $("#imagenTres")
var texto4 = $("#textoImagenCuatro")
var imagen4 = $("#imagenCuatro")
var texto5 = $("#textoImagenCinco")
var imagen5 = $("#imagenCinco")
var texto6 = $("#textoImagenSeis")
var imagen6 = $("#imagenSeis")
var texto7 = $("#textoImagenSiete")
var imagen7 = $("#imagenSiete")
var texto8 = $("#textoImagenOcho")
var imagen8 = $("#imagenOcho")
var texto9 = $("#textoImagenNueve")
var imagen9 = $("#imagenNueve")

function textoAparecer (texto,imagen){
    $(texto).css("display", "flex")
    $(imagen).css("transform", "scale(1.05)")
    $(imagen).css("filter", "brightness(60%)")
   }


   function textoAparecer2 (texto,imagen){
    $(texto).css("display", "none")
    $(imagen).css("filter", "brightness(100%)")
    $(imagen).css("transform", "scale(1.0)")
   }

//primera foto
$("#parateHover").mouseover(AparecerLetra1)
function AparecerLetra1(){
    textoAparecer(texto1,imagen1)
}

$("#parateHover").mouseout(AparecerLetra2)
function AparecerLetra2(){
    textoAparecer2(texto1,imagen1)
}

// segunda foto

$("#parateHoverDos").mouseover(AparecerLetra3)
function AparecerLetra3(){
    textoAparecer(texto2,imagen2)
}

$("#parateHoverDos").mouseout(AparecerLetra4)
function AparecerLetra4(){
    textoAparecer2(texto2,imagen2)
}

//tercera foto

$("#parateHoverTres").mouseover(AparecerLetra5)
function AparecerLetra5(){
    textoAparecer(texto3,imagen3)
}

$("#parateHoverTres").mouseout(AparecerLetra6)
function AparecerLetra6(){
    textoAparecer2(texto3,imagen3)
}

//cuarta foto

$("#parateHoverCuatro").mouseover(AparecerLetra20)
function AparecerLetra20(){
    textoAparecer(texto4,imagen4)
}

$("#parateHoverCuatro").mouseout(AparecerLetra7)
function AparecerLetra7(){
    textoAparecer2(texto4,imagen4)
}

//quinta foto


$("#parateHoverCinco").mouseover(AparecerLetra8)
function AparecerLetra8(){
    textoAparecer(texto5,imagen5)
}

$("#parateHoverCinco").mouseout(AparecerLetra9)
function AparecerLetra9(){
    textoAparecer2(texto5,imagen5)
}

//sexta foto

$("#parateHoverSeis").mouseover(AparecerLetra10)
function AparecerLetra10(){
    textoAparecer(texto6,imagen6)
}

$("#parateHoverSeis").mouseout(AparecerLetra11)
function AparecerLetra11(){
    textoAparecer2(texto6,imagen6)
}

//septima foto

$("#parateHoverSiete").mouseover(AparecerLetra12)
function AparecerLetra12(){
    textoAparecer(texto7,imagen7)
}

$("#parateHoverSiete").mouseout(AparecerLetra13)
function AparecerLetra13(){
    textoAparecer2(texto7,imagen7)
}

//Octava foto

$("#parateHoverOcho").mouseover(AparecerLetra14)
function AparecerLetra14(){
    textoAparecer(texto8,imagen8)
}

$("#parateHoverOcho").mouseout(AparecerLetra15)
function AparecerLetra15(){
    textoAparecer2(texto8,imagen8)
}

// novena foto


$("#parateHoverNueve").mouseover(AparecerLetra16)
function AparecerLetra16(){
    textoAparecer(texto9,imagen9)
}

$("#parateHoverNueve").mouseout(AparecerLetra17)
function AparecerLetra17(){
    textoAparecer2(texto9,imagen9)
} */
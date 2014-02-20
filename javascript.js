// packar in vägarna till dom olika bilderna i variabler
var image1 = new Image()
image1.src = "pics/image1.png"
var image2 = new Image()
image2.src = "pics/image2.png"
var image3 = new Image()
image3.src = "pics/image3.png"

//håller koll på vilken bild som ska visas, är nr 1 visas image1 etc...
var nr = 1;

function bildspel() {
	//plockar ut idt bildspel och byter ut dess src till image + nr + .src. Alltså om det blir "image2.src" visas "pics/image2.png", se ovan.
    document.images.bildspel.src = eval("image" + nr + ".src");
    //om 3 är större än nr så ska nr öka med 1
	if (nr < 3) nr++;
	//om 3 inte är större än nr ska nr börja om på 1
	//alltså om nr är 1 eller 2 så ska den öka och därmed byta bild till nästa,
	//medan om den är 3 så ska den börja om på 1 och därmed börja om bildspelet.
    else nr = 1;
	//funktionen bildspel ska köras varje 5e sekund
    setTimeout("bildspel()", 2000);
}

//börjar funktionen bildspel
bildspel();
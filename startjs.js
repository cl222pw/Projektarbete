///////////////////////////////////////////////////////////////////

//Startsida Bildspel//

// packar in vägarna till dom olika bilderna i variabler
var image1 = new Image()
image1.src = "pics/01.png"
var image2 = new Image()
image2.src = "pics/02.png"
var image3 = new Image()
image3.src = "pics/03.png"

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
    setTimeout("bildspel()", 3000);
}


var prev = document.querySelector(".prev");
var next = document.querySelector(".next");


//börjar funktionen bildspel
bildspel();

/////////////////////////////////////////////////////////////////////

//Startsida Toggle Knapp 1//

function toggle(){
	//om showhide har class = hide, ändra den till class = show
	if(document.getElementById("showhide").className == "hide")
		document.getElementById("showhide").className = "show";
	//annars ändra till class = hide
	else
		document.getElementById("showhide").className = "hide";
}

//Ger "hidebutton" alltså knappen man trycker på för att toggla ett namn
var hidebutton = document.querySelector("#hidebutton");
//Gör att när man trycker på showhide knappen så kör man toggle funktionen
hidebutton.onclick = toggle


/////////////////////////////////////////////////////////////////////

//Startsida Toggle Knapp 2//

function ftoggle(){
	//om showhide har class = hide, ändra den till class = show
	if(document.getElementById("fshowhide").className == "hide")
		document.getElementById("fshowhide").className = "show";
	//annars ändra till class = hide
	else
		document.getElementById("fshowhide").className = "hide";
}

//Ger "hidebutton" alltså knappen man trycker på för att toggla ett namn
var fhidebutton = document.querySelector("#fhidebutton");
//Gör att när man trycker på showhide knappen så kör man toggle funktionen
fhidebutton.onclick = ftoggle


/////////////////////////////////////////////////////////////////////

// Submit-knapp //



function validate() {
	//skapar "fail" som ger ett felmeddelande
    var fail = 'You need to enter an e-mail!'
	
	//letar upp tbody från html-koden för att sedan lägga till tabellrader i den
    var failtable = document.querySelector('#stbody');
	//skapar en tabellrad som ska läggas in i tabellens body
	var failtr = document.createElement('tr');
	//skapar ett element som används senare
	var failTd = document.createElement('td');
    
	//letar upp email idt från html-koden
	var email = document.querySelector("#email");
	
	//skapar emailNum som blir NaN om email inte är siffor
    var emailNum = parseFloat(email.value);

	//om email är större än 0 OCH är ett nummer blir dens class "correct"
	if(email.value.length > 0) {
		button.className = 'correct';
	}
	//annars blir dens class "fail"
	else {
		button.className = 'fail';
	}
	//om klassen fail finns så skapar den en text-node som lägger till ett felmeddelande i tabellen
	if (document.querySelector('.fail')) {
		var failTextNode = document.createTextNode(fail);
        failTd.appendChild(failTextNode)
	    failtr.appendChild(failTd);
		
	    failtable.insertBefore(failtr, failtable.firstChild);
		  
	}
	//om inte så körs funktionen submit
	else {
	submit(email.value);
	}    
}

//funktionen submit
function submit(email) {

	//letar upp tbody från html-koden för att sedan lägga till tabellrader i den
	var table = document.querySelector('#stbody');
	//skapar en tabellrad som ska läggas in i tabellens body
	var tr = document.createElement('tr');
	//skapar ett element som används senare
	var amountTd = document.createElement('td');
    
	//texten som ska visas senare
    var text = ' A confirmation e-mail has been sent to ' + email + '!'
    
	//lägger till "text" variabeln som text i tabellen
    var amountTextNode = document.createTextNode(text);
     
	amountTd.appendChild(amountTextNode)
	tr.appendChild(amountTd);
	table.insertBefore(tr, table.firstChild);
}



var button = document.querySelector("#sendbutton");

button.onclick = validate;



















/* <!-- Menu Container --> */
function setMenu(btn){
	if(btn.id == "eatButton"){
		eat.style.display = "block";
		eatButton.style.border = "3px solid black"
		drinks.style.display = "none";
		drinksButton.style.border = "none";
		}
	else{
		eat.style.display = "none";
		eatButton.style.border = "none";
		drinks.style.display = "block";
		drinksButton.style.border = "3px solid black"
	}				
}
/* <!-- Reservation Container --> */
/* <!-- Modal window --> */
function handleForm(e){
	let modal = document.getElementById("modalWindow");
	e.preventDefault();
	modal.style.display = "block";	
}
function closeModalWIndow(){
	let closeElement = document.getElementById("modalCloseElement");
	let modal = document.getElementById("modalWindow");
	closeElement.onclick = function(){
		modal.style.display = "none";
		let cntForm = document.getElementById("contactForm");
		cntForm.reset();
	}
}
 function getReservationInfo(){
	 let name=document.getElementById("reservationName");
	 let rNumber=document.getElementById("reservationNumber");
	 let dt=document.getElementById("reservationTime").value;
	 let dtNew = dt.replace("T"," ");
	 document.getElementById("reservationInfo").innerHTML = "<p> Ваше имя: " + name.value + "</p>"+
		"<p> Количество гостей: " + rNumber.value + "</p>" +
		"<p> Время: " + dtNew + "</p>";
/* 	Свойство Element.innerHTML задает или получает синтаксис HTML, 
	описывающий потомков элемента. */
 }

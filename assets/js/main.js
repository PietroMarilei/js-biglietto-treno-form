


document.getElementById('submit').addEventListener('click',
function () {

    const userData = document.getElementById('userData').value;
    console.log(userData, `userData`);

    const travelLenght = document.getElementById('travelLenght').value;
    console.log (travelLenght, `travelLenght`);

    const userAge = document.getElementById('userAge').value;
    console.log (userAge, `userAge`);
// ho i 3 valori dell'utente

    const ticketPrice = (travelLenght * 0.21);
    console.log (ticketPrice);
// ho il prezzo base

if (userAge == 'minorenne') {
   const youngPrice = (ticketPrice - (ticketPrice / 100 * 20)).toFixed(2) ;
// ho il prezzo giovani

   document.getElementById("answear").innerHTML = `Il tuo prezzo giovani é ${youngPrice}€`;
// lo scrivo in pagina
   console.log(youngPrice);

}else if (userAge == 'anziano'){
    const elderPrice = (ticketPrice - (ticketPrice /100 * 40)).toFixed(2);
// ho il prezzo vecchi

    document.getElementById("answear").innerHTML = `Il tuo prezzo anziani é ${elderPrice}€`;
// lo scrivo in pagina
    console.log(elderPrice);
}

else {
    document.getElementById("answear").innerHTML = `Il tuo prezzo normale é ${ticketPrice}€`;
}
// ho il prezzo gente normale e lo scrivo in pagina




}
)





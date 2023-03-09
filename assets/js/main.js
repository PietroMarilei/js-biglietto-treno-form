


document.getElementById('submit').addEventListener('click',
function () {

    const travelLenght = document.getElementById('travelLenght').value;
    console.log (travelLenght);

    const userAge = document.getElementById('userAge').value;
    console.log (userAge);
// ho i due valori dell'utente
    const ticketPrice = (travelLenght * 0.21);

    console.log (ticketPrice);
// ho il prezzo base
   if (userAge <= 18) {
   const youngPrice = (ticketPrice - (ticketPrice / 100 * 20)).toFixed(2) ;


   document.getElementById("answear").innerHTML = `Il tuo prezzo giovani é ${youngPrice}€`;

   console.log(youngPrice);

}else if (userAge >= 65){
    const elderPrice = (ticketPrice - (ticketPrice /100 * 40)).toFixed(2);


    document.getElementById("answear").innerHTML = `Il tuo prezzo anziani é ${elderPrice}€`;

    console.log(elderPrice);
}

else {
    document.getElementById("answear").innerHTML = `Il tuo prezzo normale é ${ticketPrice}€`;
}





}
)





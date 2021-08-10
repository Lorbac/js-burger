let price = 10;

let coupon = ["IDVINO1234", "LORENZO1234", "SCONTAMI123"];

// CREO UNA VARIABILE CON L'INPUT DEL BUTTON E AGGIUNGO L'ADDEVENTLISTENER IN MODO CHE CON IL CLICK FACCIA DETERMINATE COSE CHE ANDRO' IN SEGUITO A DESCRIVERE 

let btnCalcola = document.getElementById("button");

btnCalcola.addEventListener("click",
function () {

    // CICLO FOR PER INSERIRE I VALUE (PREZZI) CHE SONO STATI CHECKATI DEGLI INGREDIENTI IN UN ARRAY

    var ingredientPrice = document.getElementsByClassName("myCheckbox");
    var choosenIngredients = [];

    for (let i = 0; i < 6; i++) {
      if (ingredientPrice[i].checked) {
        let ingredientsPrice = parseInt(ingredientPrice[i].value);
        choosenIngredients.push(ingredientsPrice);
    }}

    // SOMMO TUTTI I PREZZI DEGLI INGREDIENTI CON UN ALTRO CICLO FOR
    
    for (let i = 0; i < choosenIngredients.length; i++) {
        price += choosenIngredients[i];
    }

    // DO LA POSSIBILITA' DI INSERIRE IL COUPON. SE PRESENTE NELL'ARRAY DICHIARATO ALL'INIZIO ANDRA' A SCONTARE IL PREZZO DEL 20%

    let insertCoupon = document.getElementById("couponText").value;
    
    if (coupon.includes(insertCoupon)) {
        price = price * 0.80;
    }

    // SE IL NOME DEL PANINO NON É STATO INSERITO LO RICHIEDO TRAMITE UN ALERT

    if (document.getElementById("name").value == "") {
        alert("Inserisci il nome del panino");
    }
    
    document.getElementById("priceText").innerHTML = price;
});
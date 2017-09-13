/**
 * Author: Ayesha Mulla
 * Date: 13/9/2017
 * Description: this function validates the card number and show logo to the lest side of text box
 * @param {* card number - input from user} cardNumber 
 */
function CheckCreditCardNumber(cardNumber) {
    var imgCardElement = document.getElementById("imgCard");
    var errText = document.getElementById("errorCard");
    var creditCardInput = document.getElementById("creditCardInput");

    //initial values of logo, border and error
    errText.innerHTML = "";
    creditCardInput.style.border = "1px solid black";
    imgCardElement.style.display = "none";

    //cards data
    cards =
        [{
            name: "Visa",
            regX: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
            img: "visaCard.png"
        },
        {
            name: "American Express",
            regX: /^(?:3[47][0-9]{13})$/,
            img: "american-express.png"
        },
        {
            name: "Master Card",
            regX: /^(?:5[1-5][0-9]{14})$/,
            img: "MasterCard.png"
        },
        {
            name: "Discover Card",
            regX: /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/,
            img: "DiscoverCard.png"
        },
        {
            name: "Diners Club Card",
            regX: /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/,
            img: "DinerClub.ico"
        },
        {
            name: "J C B Card",
            regX: /^(?:(?:2131|1800|35\d{3})\d{11})$/,
            img: "jcbCard.png"
        }]

    //if card number is empty, dont evaluate
    if (cardNumber != "") {
        var i = 0;

        for (; i < cards.length; i++) {

            if ((cards[i].regX).test(cardNumber)) {
                imgCardElement.src = 'image/' + cards[i].img;
                imgCardElement.style.display = "block";
                break;
            }
            else {
                imgCardElement.src = "";
                imgCardElement.style.display = "none";
            }
        }
        if (i >= cards.length) {
            errText.innerHTML = "Card is invalid";
            errText.style.color = "red";
            creditCardInput.style.border = "1px solid red";
        }
        else {
            errText.innerHTML = "Card is valid";
            errText.style.color = "green";
            creditCardInput.style.border = "1px solid green";
        }
    }
}

/**
 * event listener for taking input from user
 * it will allow only numbers/delete/backspace
 */
document.getElementById('creditCardInput').addEventListener('keyup', function (e) {
    var re = /[0-9:]+/g;
    var key = e.keyCode || e.charCode;
    if (re.test(e.target.value) || (key == 8 || key == 46)) {
        var cardNumber = e.target.value.split(' ').join(''); // remove space and take number to validate
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim(); // add space after 4 digit
        CheckCreditCardNumber(cardNumber);
    }
    else {
        e.target.value = "";
    }
});

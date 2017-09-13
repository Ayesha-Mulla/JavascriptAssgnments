/** 
 * Author : Ayesha Mulla
 * Date : 13/9/2017
 * Description : This function will validate password and show its strength based on rules applied.
 * @param {* password text is get from onkey press event} password 
 */
function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");

    //Regular Expressions.
    var regex = new Array();
    regex.push("^.{6,}$"); //minimum 6 character
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&,:;]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        listRuleItem = document.getElementById(i+1);
        if (new RegExp(regex[i]).test(password)) {
            listRuleItem.style.display= "none";
            passed++;
        }
        else {
             listRuleItem.style.display= "list-item";
        }
    }
    //if all passed hide rules box
    if (passed == 5) {
        document.getElementsByClassName("rules")[0].style.display = "none";
    }
    else
    {
        document.getElementsByClassName("rules")[0].style.display = "block";        
    }

    /*
     *  isplay status.
     * give width based on passed tests 
     */
    var color = "red";
    var strength = "Weak";
    var width = "0%";
    switch (passed) {
        case 1:
            width = "10%";
            break;
        case 2:
            width = "30%";
            break;
        case 3:
            width = "50%";
            break;
        case 4:
            strength = "Fair";
            color = "green";
            width = "70%";
            break;
        case 5:
            strength = "Strong";
            color = "darkgreen";
            width = "100%";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;
    document.getElementById("innerBar").style.width = width;
}

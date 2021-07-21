//Get the string from the page, controller function
function getString(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let reversedString = reverseString(userString);

    displayString(reversedString);
}

//Reverse the string, logic function
function reverseString(userString){
    let revString = [];

    //Reverse the string with a decrement for loop
    for (let i = userString.length - 1; i >= 0; i--){
        revString += userString[i]; //Not the array.push() method
    }
    return revString;
}

//Display the reversed string and message to the user, view function
function displayString(reversedString){
    //Write message to the page
    document.getElementById("message").innerHTML = `The reversed string is: ${reversedString}`;

    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}
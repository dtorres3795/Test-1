// Character Array
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// DOM Elements
let password_1_El=document.getElementById("password_1_el")
let password_2_El=document.getElementById("password_2_el")
let password_3_El=document.getElementById("password_3_el")
let password_4_El=document.getElementById("password_4_el")
let loadingBar=document.getElementById("loading_bar")

// Generate a Single Character
function generate_a_char(){
    let random_nr = Math.floor(Math.random() * characters.length);
    let random_item=characters[random_nr]
    return random_item
}

// Generate Passwords
function generate_password(length_of_password){
    loadingBar.style.width="100%"
    setTimeout(() => { loadingBar.style.width="0%" }, 500)

    let i = 0;
    const n = length_of_password;
    password_1=""
    password_2=""
    password_3=""
    password_4=""
    do {
        password_1+=generate_a_char();
        password_2+=generate_a_char();
        password_3+=generate_a_char();
        password_4+=generate_a_char();
        i++;
    } while(i < n);
    password_1_El.textContent=password_1
    password_2_El.textContent=password_2
    password_3_El.textContent=password_3
    password_4_El.textContent=password_4
}

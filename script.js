// Characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#",
"$","%","^","&","*","_","-","+","=",",",":",";",".","?","/"];

// Passwords
let password_1_El = document.getElementById("password_1_el")
let password_2_El = document.getElementById("password_2_el")
let password_3_El = document.getElementById("password_3_el")
let password_4_El = document.getElementById("password_4_el")
let password_5_El = document.getElementById("password_5_el")
let password_6_El = document.getElementById("password_6_el")

// Easter Egg
let click_times = []

function check_spam() {
    const now = Date.now()
    click_times.push(now)
    click_times = click_times.filter(t => now - t < 2000)
    if (click_times.length >= 7) {
        click_times = []
        show_easter_egg()
    }
}

function show_easter_egg() {
    const egg = document.getElementById("easter_egg")
    const skeleton = document.getElementById("skeleton")
    if (!egg || !skeleton) return
    egg.style.display = "block"
    skeleton.style.animation = "none"
    skeleton.offsetHeight
    skeleton.style.animation = "run_across 3s linear forwards"
    setTimeout(() => { egg.style.display = "none" }, 3000)
}

function generate_a_char() {
    return characters[Math.floor(Math.random() * characters.length)]
}

// Generate Passwords
function generate_password(length_of_password) {
    if (!password_1_El) return
    check_spam()
    let password_1 = ""
    let password_2 = ""
    let password_3 = ""
    let password_4 = ""
    let password_5 = ""
    let password_6 = ""
    for (let i = 0; i < length_of_password; i++) {
        password_1 += generate_a_char()
        password_2 += generate_a_char()
        password_3 += generate_a_char()
        password_4 += generate_a_char()
        password_5 += generate_a_char()
        password_6 += generate_a_char()
    }
    function maybe(p) {
        const roll = Math.random()
        if (roll < 0.01) return "$ucce$$"
        if (roll < 0.02) return "^wi_believe_i_can_fi^"
        return p
    }
    password_1_El.textContent = maybe(password_1)
    password_2_El.textContent = maybe(password_2)
    password_3_El.textContent = maybe(password_3)
    password_4_El.textContent = maybe(password_4)
    password_5_El.textContent = maybe(password_5)
    password_6_El.textContent = maybe(password_6)
}

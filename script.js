const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",".","?",
"/"];



let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")

const generateButton = document.getElementById("green-btn")

generateButton.addEventListener('click', function() {
    password1El.textContent = ""
    password2El.textContent = ""
    for (let i = 0; i < 15; ++i) {
        randomCharacter1 = Math.floor(Math.random() * characters.length)
        randomCharacter2 = Math.floor(Math.random() * characters.length)
        
        password1El.textContent += characters[randomCharacter1]
        password2El.textContent += characters[randomCharacter2]
    }
    

})

const copyToClipboard1 = document.getElementById("password-1")

copyToClipboard1.addEventListener('click', function() {
    navigator.clipboard.writeText(password1El.textContent)
        alert("Copied text: " + password1El.textContent)
})

const copyToClipboard2 = document.getElementById("password-2")

copyToClipboard2.addEventListener('click', function() {
    navigator.clipboard.writeText(password2El.textContent)
        alert("Copied text: " + password2El.textContent)
})

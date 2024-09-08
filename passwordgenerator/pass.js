



document.getElementById("submitbutton").onclick = function(){


    function generatepassword(lengthofpassword, lowercase, uppercase,symbols, numbers){

        let lowercasechars = 'abcdefghijklmnopqrstuvwxyz';
        let uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let symbolschars = '!£$%^&*()#?/><:;';
        let numberschars = '1234567890';
    
        let allowedChars = "";
        let password = "";
    
        allowedChars += lowercase ? lowercasechars : "";
        allowedChars += uppercase ? uppercasechars : "";
        allowedChars += symbols ? symbolschars :"";
        allowedChars += numbers ? numberschars : "";
    
        if (lengthofpassword <= 0){
            return ("Password length must be at least 1")
        }
        if (allowedChars.length === 0){
            return ("At least one set of character should be selected")
        }
    
        for (let i = 0 ; i <= lengthofpassword; i++){
            let indexofchar = Math.floor( Math.random()* allowedChars.length);
            password += allowedChars[indexofchar];
        }
    
    
         return password;
    }

    const lengthofpassword = 12; 
    const lowercase = true;
    const uppercase = true;
    const symbols = true;
    const numbers = true;

    let password = generatepassword(lengthofpassword, lowercase, uppercase, symbols, numbers)
    console.log(`Generated Password : ${password}`)
    document.getElementById("showpassword").textContent = password
}


function clearPassword() {
    document.getElementById('showpassword').innerText = '';
}
document.getElementById('clearbutton').addEventListener('click', clearPassword);


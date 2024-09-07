function roll_Dice(){

    let numberofdice = document.getElementById("no_ofdice").value;
    let diceresult = document.getElementById("dice_result");
    let diceimage = document.getElementById("img_dice");
    let values = [];
    let images = [];

    for (let i = 0 ;i < numberofdice; i++ ){

        const value = Math.floor(Math.random() * 6 ) + 1
        values.push(value)
        images.push(`<img src = "image/${value}.png" alt = "Dice : ${value}">`)
    }

    diceresult.textContent = `Dice : ${values.join(",")}`
    diceimage.innerHTML = images.join(" ")
}
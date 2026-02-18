function rollDice(){
    const diceValue = document.getElementById("diceValue").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i = 0; i < diceValue; i++){
        const random = Math.floor(Math.random() * 6) + 1;
        values.push(random);
        images.push(`<img src="dice_images/Dice-${random}.png" alt="Dice ${random}">`);
    }

    diceResult.textContent = `Dice : ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(` `);
}
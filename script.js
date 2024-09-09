function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function addColor() {
    let newColor = prompt("Enter a color name or hex code:").trim();
    if (newColor) {
        let colorPanel = document.getElementById('colorPanel');
        let newButton = document.createElement('button');
        
        newButton.classList.add('color-box');
        newButton.style.backgroundColor = newColor;
        newButton.textContent = newColor;
        newButton.onclick = function() {
            changeColor(newColor);
        };

        //inserting the newly added button before the add button
        let addColorButton = document.getElementById('addColorButton');
        colorPanel.insertBefore(newButton, addColorButton);
    }
}
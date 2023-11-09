
//*-----------------  Functions to generate random colors -----------------*//

function randomPastelPurple() {
    const colorPurpleColors = [
        'rgb(86, 24, 127)',
        'rgb(209, 140, 255)',
        'rgb(173, 48, 255)',
        'rgb(97, 53, 127)',
        'rgb(138, 38, 204)'
    ];
        // Choosing a random color from the list
        const colorPurple = colorPurpleColors[Math.floor(Math.random() * colorPurpleColors.length)];
        return colorPurple;
    }
    

    function randomPastelBlue() {
        const colorBlueColors = [
            'rgb(0, 48, 90)',
            'rgb(0, 75, 141)',
            'rgb(0, 116, 217)',
            'rgb(65, 146, 217)',
            'rgb(122, 186, 242)',
        ];
        // Choosing a random color from the list
        const colorBlue = colorBlueColors[Math.floor(Math.random() * colorBlueColors.length)];
        return colorBlue;
        }

        function randomPastelRGB() {
            const colorRGBColors = [
                'rgb(244, 218, 226)',
                'rgb(237, 206, 229)',
                'rgb(222, 195, 225)',
                'rgb(187, 213, 242)',
                'rgb(212, 224, 249)',
                'rgb(168, 230, 207)',
                'rgb(220, 237, 193)',
                'rgb(255, 211, 182)',
                'rgb(255, 170, 165)',
                'rgb(255, 139, 148)',
            ];
            // Choosing a random color from the list
            const colorRGB = colorRGBColors[Math.floor(Math.random() * colorRGBColors.length)];
            return colorRGB;
        }


//**------------- Defining the grid container ---------------- */

const gridContainer = document.getElementById('the-grid');
const gridSizeInput = document.getElementById('size');
const colorRadioButtons = document.querySelectorAll('input[type="radio"]');
const rainbowRadio = document.getElementById('rainbow');

//**---------------- Event listener for radio buttons -------------------- */

colorRadioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.checked) { // Check if the radio button is selected
            const selectedColor = radio.value; // Get the selected color value
            const gridItem = document.createElement('div');

            // Update the gridItem background color based on the selected color
            if (selectedColor === 'rainbow') {
                gridItem.style.backgroundColor = randomPastelRGB();
            } else if (selectedColor === 'purple') {
                    gridItem.style.backgroundColor = randomPastelPurple();
            } else if (selectedColor === 'blue') {
                    gridItem.style.backgroundColor = randomPastelBlue();
            } else {
                    gridItem.style.backgroundColor = selectedColor;
            }
        }   
    });
});

//**----------------- Function to update the grid ------------------------- */

function updateGrid() {

    // Get the input grid size
    const rows = parseInt(gridSizeInput.value);
    const columns = rows; 

    // Clear the existing grid content
    gridContainer.innerHTML = '';

    // Set the grid template columns based on the input size
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    // Dynamically create grid items
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            // Create a new grid item element
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';

            // Add event listener for mouseover event
            gridItem.addEventListener ('mouseover',() => {
                const selectedColorInput = document.querySelector('input[type="radio"]:checked');
                const selectedColor = selectedColorInput ? selectedColorInput.value : null;

                // Update the grid item background color based on the selected color 
                if (selectedColor) {
                    if (selectedColor === 'rainbow') {
                        gridItem.style.backgroundColor = randomPastelRGB();
                    } else if (selectedColor === 'purple') {
                        gridItem.style.backgroundColor = randomPastelPurple();
                    } else if (selectedColor === 'blue') {
                        gridItem.style.backgroundColor = randomPastelBlue();
                    } else {
                        gridItem.style.backgroundColor = selectedColor;
                    }
                }
            });


            // Append the grid item to the grid container 
            gridContainer.appendChild(gridItem);
        }
    }
}

//**------------------- Event listener for grid size input changes -----------------*/
gridSizeInput.addEventListener('input', updateGrid);

// Call the UpdateGrid function to initialized the grid
updateGrid();
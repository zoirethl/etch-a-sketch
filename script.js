/**const container = 
document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.id = "container";

document.body.appendChild(container)*/

//Random color
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 400));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 

//defining grid size:
const gridContainer = document.getElementById('the-grid');
const gridSizeInput = document.getElementById('size');
const colorRadioButtons = document.querySelectorAll('input[type="radio"]');
const rainbowRadio = document.getElementById('rainbow');

colorRadioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        if (radio.value === 'rainbow') {
            hoverDiv.style.backgroundColor = randomColor();
        } else {
        hoverDiv.style.backgroundColor = radio.value;
      }
    }
    });
  });

function updateGrid() {
    const rows = parseInt(gridSizeInput.value);
    const columns = rows; 

    gridContainer.innerHTML = '';

    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
//creating the grid dynamically
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        //creating grid item element
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
                
        gridItem.addEventListener ('mouseover',() => {
            const selectedColor = document.querySelector('input[type="radio"]:checked');
            if (selectedColor) {
                if (selectedColor.value === 'rainbow') {
                    gridItem.style.backgroundColor = randomColor();
                  } else {
            gridItem.style.backgroundColor= selectedColor.value;
            }
        }
        })

        gridContainer.appendChild(gridItem);
    }
}
}
gridSizeInput.addEventListener('input', updateGrid);
updateGrid();


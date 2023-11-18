const matrixInput = document.getElementById("matrix-size");
const acceptButton = document.querySelector(".accept-button");
const boardContainer = document.querySelector(".board-container");
const currentColor = document.querySelector("span");
const startPage = document.querySelector(".start-page");

//color tool selectors
const groundColorTool = document.querySelector(".ground-color")
const ground2ColorTool = document.querySelector(".ground2-color")

const silverColorTool = document.querySelector(".silver-color")
const greenColorTool = document.querySelector(".green-color")
const treeColorTool = document.querySelector(".tree-color")
const cloudColoeTool = document.querySelector(".cloud-color")
const whiteColorTool = document.querySelector(".white-color")
const stoneColorTool = document.querySelector(".stone-color")
const body = document.querySelector('body')
const tools = document.querySelector('.tools-container')


let selectedColor = "white-color"



const initGame = () => {
   startPage.style.display = "none"
   body.style.backgroundImage = "none"
   tools.style.display = "block"

    boardContainer.innerHTML = "";
    for (let i = 0; i < 22; i++) {
        const row = addRow();
        boardContainer.appendChild(row)
        
        
        for (let j = 0; j < 14; j++) {
            const cell = addCell()
            
            //ground
            if (j === 9) {
                cell.classList.add("ground-color"); // Add your class for ground color here
            }

            if(j>9){
                cell.classList.add("ground2-color");
            }


            //green
            if (i === 3 && j === 7 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            } 
            if (i === 2 && j === 8 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 3 && j === 8 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 4 && j === 8 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            //green-tree
            if (i === 13 && j === 5 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 14 && j === 5 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 15 && j === 5 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 13 && j === 4 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 14 && j === 4 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 15 && j === 4 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 13 && j === 3 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 14 && j === 3 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }
            if (i === 15 && j === 3 ) {
                cell.classList.add("green-color"); // Add your class for red color here
            }

            //silver
            if (i === 9 && j === 8 ) {
                cell.classList.add("silver-color"); // Add your class for red color here
            }
            if (i === 10 && j === 8 ) {
                cell.classList.add("silver-color"); // Add your class for red color here
            }

            //tree-color
            if (i === 14 && j === 8 ) {
                cell.classList.add("tree-color"); // Add your class for red color here
            }
            if (i === 14 && j === 7 ) {
                cell.classList.add("tree-color"); // Add your class for red color here
            }
            if (i === 14 && j === 6 ) {
                cell.classList.add("tree-color"); // Add your class for red color here
            }

            //stone
            if (i === 19 && j === 8 ) {
                cell.classList.add("stone-color"); // Add your class for red color here
            }
            if (i === 19 && j === 7 ) {
                cell.classList.add("stone-color"); // Add your class for red color here
            }
            if (i === 20 && j === 8 ) {
                cell.classList.add("stone-color"); // Add your class for red color here
            }
            if (i === 21 && j === 8 ) {
                cell.classList.add("stone-color"); // Add your class for red color here
            }
            if (i === 20 && j === 7 ) {
                cell.classList.add("stone-color"); // Add your class for red color here
            }

            //cloud
            if (i === 6 && j === 2 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 7 && j === 2 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 4 && j === 2 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 3 && j === 2 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 4 && j === 1 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 6 && j === 3 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 7 && j === 3 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 5 && j === 3 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 4 && j === 3 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 3 && j === 3 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 2 && j === 3 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 4 && j === 4 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }
            if (i === 5 && j === 4 ) {
                cell.classList.add("cloud-color"); // Add your class for red color here
            }



            



            row.appendChild(cell)
            handleCell(cell)


        }
        
       
        
    }
}






const addRow = () => {
    const row = document.createElement("div");
    row.className = "row"
    return row;
}

const addCell = () =>{
    const cell = document.createElement("div")
    cell.className = "cell white-color"
    
   
    
    return cell;
}



const handleCell = (cell) => {
    cell.addEventListener("click",cellClickHandler)
}



const cellClickHandler = (event) =>{
    if(event.target.classList.contains("white-color") || selectedColor === "white-color"){
        event.target.className = "cell"
        event.target.classList.add(selectedColor)
    }
}

const setupColorTools = () => {
    groundColorTool.addEventListener("click", () => setColor("ground-color"))
    silverColorTool.addEventListener("click", () => setColor("silver-color"))
    greenColorTool.addEventListener("click", () => setColor("green-color"))
    treeColorTool.addEventListener("click", () => setColor("tree-color"))
    whiteColorTool.addEventListener("click", () => setColor("white-color"))
}
 
const setColor = (color) => {
    selectedColor = color;
    currentColor.textContent = color.split("-")[0] != 'white' ? color.split("-")[0] : 'Clear'
}

setupColorTools()
acceptButton.addEventListener("click", initGame)

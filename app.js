function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
} 



let ranColor = document.querySelector('.random-colors');

function generateColor(){
    for(let i = 0; i<20;i++){
        let color = randomColor();
    

        let card = document.createElement('div');
        card.classList.add('random-card');

        let colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;
        

        let colorData = document.createElement('div');
        colorData.classList.add('color-data');

        let colorCode = document.createElement('div');
        colorCode.classList.add('color-code');
        colorCode.textContent = color;
        

        let btn = document.createElement('span');
        btn.classList.add('btn');
        // btn.textContent = '&#128203';

        colorData.appendChild(colorCode);
        colorData.appendChild(btn);

        card.appendChild(colorBox);
        card.appendChild(colorData);

       ranColor.appendChild(card);


         //Altrnate method 

        // ranColor.innerHTML += `
        // <div class="random-card">
        //     <div class="color-box"></div>
        //     <div class="color-data">
        //         <div class="color-code">${color}</div>
        //         <span class="btn">&#128203;</span>
        //     </div>
        // </div> `
    }
}

generateColor();
const roll = document.getElementById('roll');
let score = document.getElementById('score');
let image = document.getElementById('image');
const win = 20;
let currentScore = 0;



roll.addEventListener('click', () => {
  
   let face = Math.floor((Math.random()*6)+1);
   score.textContent = currentScore;
   image.src=`/images/inverted-dice-${face}.svg`;
   

    if(face == 1){
       currentScore = 0;
        score.textContent = currentScore;
        score.textContent = "YOU LOSE!!";
        
        
    }else if(face == 2 ){
        currentScore = face + currentScore;
        score.textContent = currentScore;
        

    }else if(face == 3){
        currentScore = face + currentScore;
        score.textContent = currentScore;

    }else if(face == 4){
        currentScore = face + currentScore;
        score.textContent = currentScore;

    }else if(face == 5){
        currentScore = face + currentScore;
        score.textContent = currentScore;

    }else if(face == 6){
        currentScore = face + currentScore;
        score.textContent = currentScore;
    }
    if(currentScore >= 20){
        score.textContent = "YOU HAVE WON!!"
        currentScore = 0;
    }
  
})

// roll.addEventListener('click', () => {
  
//     face = Math.floor((Math.random()*6)+1);
    
//     if (face!= 1){
    
//     }else if (face == 2 || face == 3 || face == 4 || face == 5 || face ==6) {
//         score = face + score;
//         console.log(score)
//     }
// })

// score = 0;
// total = (face, score) =>{
//     face + score == 20;
//     score.innerHTML = `${score}`;
// }


// for (let i = 0; i <favMovie.length; i++){
//     //     console.log(favMovie[i]);
// let orderCount = 0;

// const takeOrder = (topping, topping2) => {
//     console.log(`Pizza with ${topping} and ${topping2}`);
//     orderCount++;
// }

// takeOrder("Spicy beef", "Chicken");
// console.log(orderCount);

let indir={x:0,y:0};
let snakepos=[{x:10,y:10}];
let food={x:15,y:12};
let score=0;
let speed=0;
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const musicSound = new Audio('music.mp3');
let level=prompt("Select Level", "easy||medium||hard");
if(level=="easy")
{
    speed=3;
}
else if( level=="medium")
{
    speed=10;
}
else if( level=="hard")
{
    speed=19;
}
else{
    alert("reload and enter valid level");
}
setInterval(gameEngine, 1000/speed);


function iscollide(snake){
    for(let i=1; i<snake.length;i++)
    {
        if(snake[i].x==snake[0].x && snake[i].y==snake[0].y){
        return true;}
        
    }
    if(snake[0].x>=20||snake[0].x<1|| snake[0].y>=20||snake[0].y<1)
    {
        return true;
    }
    return false;
}
function gameEngine(){
   if(iscollide(snakepos))
   { gameOverSound.play();
    musicSound.pause();
    indir =  {x: 0, y: 0};
    alert("Game Over. Press any key to play again!");
    level=prompt("Select Level", "easy||medium||hard");
if(level=="easy")
{
    speed=3;
}
else if( level=="medium")
{
    speed=10;
}
else if( level=="hard")
{
    speed=19;
}
else{
    alert("reload and enter valid level");
}

    snakepos = [{x: 10, y: 10}];
    score=0;
     musicSound.play(); 
    
   }
    if(food.x==snakepos[0].x && food.y==snakepos[0].y)
    { foodSound.play();
        score+=1;
        scoreboard.innerHTML="Score:"+score;
        snakepos.unshift({x:snakepos[0].x + indir.x, y:snakepos[0].y +indir.y});
        let a = 1;
        let b = 20;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())};
    }
    for(let i=snakepos.length-2; i>=0;i--)
    {
        snakepos[i+1]={...snakepos[i]};
    }
    snakepos[0].x+=indir.x;
    snakepos[0].y+=indir.y;
    game.innerHTML="";
    snakepos.forEach((e,index)=> {
        snakeelement=document.createElement("div");
        snakeelement.style.gridRowStart=e.y;
        snakeelement.style.gridColumnStart=e.x;
        if(index==0)
        {
            snakeelement.classList.add("head");
        }
        else{
            snakeelement.classList.add("snake");
        }
        game.appendChild(snakeelement);
        

    })
        foodelement=document.createElement("div");
        foodelement.style.gridRowStart=food.y;
        foodelement.style.gridColumnStart=food.x;
        foodelement.classList.add("food");
        game.appendChild(foodelement);
    }

 window.addEventListener("keydown", e =>{
     indir={x:0,y:1};
     switch(e.key){
             case "ArrowUp":
             indir={x:0,y:-1};
             break;
             case "ArrowDown":
             indir={x:0,y:1};
             break;
             case "ArrowRight":
             indir={x:1,y:0};
             break;
             case "ArrowLeft":
             indir={x:-1,y:0};
             break;
             default:
             break;
     }

 })
 musicSound.play();
 
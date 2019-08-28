let cvs = document.getElementById("canvas")
let ctx = cvs.getContext("2d")


let bird = new Image()
let bg = new Image()
let fg = new Image()
let pipeUp = new Image()
let pipeBottom = new Image()

bird.src = "img/bird.png"
bg.src = "img/bg.png"
fg.src = "img/fg.png"
pipeUp.src = "img/pipeUp.png"
pipeBottom.src = "img/pipeBottom.png"

let fly = new Audio
let score_audio = new Audio
let melody = new Audio


fly.src = "audio/fly.mp3"
score_audio.src = "audio/score.mp3"
melody.src = "audio/MELODY.mp3"
document.addEventListener("keydown", moveUp )
  
alert("Здравствуйте вас приветствует игра Flappy Bird.NAZ.1.0 ! Чтобы получить удовольсвие от игры просто нажмите на любую кнопку на твоей клавиатуре и всё).Удачной игры")


function moveUp(){
    yPos -= 25,
    fly.play()
    melody.play()

}

let pipe = []
pipe [0] = {
    x : cvs.width,
    y : 0
} 

let gap = 100

let score = 0

let xPos = 10
let yPos = 150
let grav = 1.5

function draw() {
    ctx.drawImage(bg, 0, 0)

    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap) 

        pipe[i].x--


        if(pipe[i].x == 100) {
            pipe.push({
            x : cvs.width,
            y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
            

           
        }
        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) 
            || yPos + bird.height >= cvs.height - fg.height) {
            
            alert('Ты проиграл! Попробуй ещё)' )
            location.reload()

            }

        if(pipe[i].x == 5){
            score++,
            score_audio.play()
        } 
    }
    
    ctx.drawImage(fg, 0, cvs.height - fg.height)
    ctx.drawImage(bird, xPos, yPos)

    yPos += grav

    ctx.fillStyle = "#000"
    ctx.font = "24px Verdana"
    ctx.fillText("Счет: " + score, 10, cvs.height - 20)

    
    requestAnimationFrame(draw)
}
pipeBottom.onload = draw

melody.play()


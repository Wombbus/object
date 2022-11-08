var img1 = ""

function preload(){
img = loadImage("dog_cat.jpg")
img1 = loadImage("football.jpg")
}

function setup(){
canvas = createCanvas(700,400)
canvas.center()
objectDetect = ml5.objectDetector("cocossd",modelLoaded)
}

function draw(){
image(img,0,0 , 700,400)
noFill()
stroke("magenta")
rect(40,50 , 370,320)
text("dog",50,60)
stroke("red")
rect(320,70 ,370,320)
text("cat",330,80)
}

function modelLoaded(){
    console.log("The model has been loaded")
    objectDetect.detect(img1,gotResults)
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
    }
}
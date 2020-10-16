const trainPic = document.getElementById("train");
const overlayPic = document.getElementById("overlay");
const trackPic = document.getElementById("track");

let train = {
    img: trainPic,
    sx: 4,
    sy: 23,
    swidth: 64,
    sheight: 28,
    x: 100,
    y: 100,
};

window.onload = function() {
    drawTrack();
}

function changeTrack() {
    drawTrack();
}

function drawTrack() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    //Draw some track
    //let path = new Path2D();
    ctx.beginPath();
    ctx.moveTo(36,0);
    ctx.lineTo(36,0);
    ctx.lineTo(72,19),
    ctx.lineTo(72,54);
    ctx.lineTo(36,72);
    ctx.lineTo(0,54);
    ctx.lineTo(0,19);
    ctx.closePath();
    //ctx.fillStyle = "#f00";
    //ctx.fill();
    ctx.clip();
    let img = new Image();
    img.addEventListener('load', function(e){
        ctx.drawImage(this,0,0,72,72);
    },true);
    img.src = "./img/track.png";
    
    //Draw the train
    ctx.drawImage(train.img,train.sx, train.sy,train.swidth, train.sheight,train.x, train.y, train.swidth, train.sheight);

}
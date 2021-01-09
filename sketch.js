let img;

function preload() {
    img = loadImage('sculpture.jpeg');
}

function setup() {
    createCanvas(900, 900, WEBGL);

    translate(-width/2, -height/2);
    img.resize(width, 0);


    // image(img, 0, 0);
}
  
function draw() {
    background('#f1f1f1');
    translate(-width/2, -height/2);
    // var tiles = floor(map(mouseX,0, width, 0, 100, true));
    let tiles = 60;
    console.log(tiles);
    let tileSize = width/tiles;


    push();
        translate(width/2, height/2);
        rotateY(radians(frameCount));
        fill(0);
        noStroke();

        for (let i = 0; i < tiles; i++) {
            for (let j = 0; j < tiles; j++) {
                let c = img.get(i*tileSize,j*tileSize);
                let b = map(brightness(c), 0, 255, 0, 1);
                let z = map(b, 0, 1, -100, 100);

                push();
                translate(i*tileSize - width/2, j*tileSize - height/2, z);
                sphere(b*tileSize);
                pop();

                
                
            }
            
        }

    pop();

}
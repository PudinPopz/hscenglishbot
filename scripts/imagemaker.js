var misc = require('../misclib');
var fs = require('fs');
var memeAmount = 105;
var loadedImageData;
//var loadedImage = new Image();
drawRandomImage();
var textthing = "Compose a piece of writing which persuasively explores the notion of belonging. | | Use the item below as the central element for your writing.";
var widththing = 600;
var Canvas = require('canvas-prebuilt'), ImageThing = Canvas.Image, canvas = new Canvas(800, 800), ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.rect(0, 0, 1501, 1001);
ctx.fillStyle = "white";
ctx.fill();
ctx.font = '12px Times New Roman';
//LOAD IMAGE(S)
var img = new Canvas.Image;
function randimgpath() {
    return ('./images/' + 'meme (' + (1 + Math.floor(Math.random() * memeAmount)).toString() + ').PNG');
}
var datatype = "data:image/png;base64,";
var imgbase64;
var imagesrcoutput;
function drawRandomImage() {
    fs.readFile(('./images/' + 'meme (' + (1 + Math.floor(Math.random() * memeAmount)).toString() + ').PNG'), //after loading
    function (err, data) {
        if (err) {
            throw err;
        }
        else {
            console.log('Successfully loaded image.');
        }
        //write
        loadedImageData = data;
        //  loadedImage.src = "data:image/png;base64";
        // Create a new Image
        //  img.src = data;
        console.log(data);
        function base64_encode(file) {
            // read binary data
            var bitmap = fs.readFileSync(file);
            // convert binary data to base64 encoded string
            return new Buffer(bitmap).toString('base64');
        }
        imgbase64 = base64_encode(randimgpath());
        console.log(imgbase64);
        imagesrcoutput = datatype + imgbase64;
        img.src = imagesrcoutput;
        var aspectRatio = img.width / img.height;
        console.log(aspectRatio);
        //actually draw image
        //ctx.drawImage(img, 72, 222);
        ctx.drawImage(img, 72, 222, canvas.width - 250, (canvas.height - 222) / aspectRatio); // destination rectangle
        console.log(img.src);
        drawText();
    });
}
function drawText() {
    function wrap() {
        var drawx = 72;
        var drawy = 72;
        var text = textthing, fontSize = 20, width = widththing, lines = [], line = '', lineTest = '', words = text.split(' '), currentY = 0;
        ctx.font = fontSize + 'px Times New Roman';
        for (var i = 0, len = words.length; i < len; i++) {
            if (words[i] != "|") {
                lineTest = line + words[i] + ' ';
            }
            // Check total width of line or last word
            if (ctx.measureText(lineTest).width > width || words[i] == "|") {
                // Calculate the new height
                currentY = lines.length * fontSize + fontSize;
                // Record and reset the current line
                lines.push({ text: line, height: currentY });
                line = words[i] + ' ';
            }
            else {
                line = lineTest;
            }
        }
        // Catch last line in-case something is left over
        if (line.length > 0) {
            currentY = lines.length * fontSize + fontSize;
            lines.push({ text: line.trim(), height: currentY });
        }
        // Visually output text
        ctx.fillStyle = "black";
        for (var i = 0, len = lines.length; i < len; i++) {
            ctx.fillText(lines[i].text.replace('|', '').trim(), drawx + 0, drawy + lines[i].height);
        }
        //drawRandomImage();
    }
    wrap();
    misc.notif("Canvas established");
    //  ctx.drawImage(img, 2, 2);
    fs.writeFile('bepis.png', canvas.toBuffer());
}
//Wrapping
//
//

function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.beginPath();

    var x;
    var y;

    canvas.onmousedown = function (e) {
      x = e.clientX;
      y = e.clientY;
      ctx.moveTo(x, y);
    }

    canvas.onmouseup = function (e) {
      x = null;
      y = null;
    }

    canvas.onmousemove = function (e) {
      if (x == null || y == null) {
        return;
      }
      x = e.clientX;
      y = e.clientY;
      x -= canvas.offsetLeft;
      y -= canvas.offsetTop;
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.moveTo(x, y);
    }
  };


  
  function convertCanvasToImage() {
    /*//var image = new Image();
    //image.src = canvas.getImageData("image/png");
    //console.log(image)
    var img = document.getElementById('canvas');
    var ctx = getContext('2d')
    //var imageData = img.Data[0];
    console.log(img.Data);
    return img;//imageData;*/
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    var imgData = ctx.getImageData(0, 0, 300, 300);
    red = imgData.data;/*
  green = imgData.data[1];
  blue = imgData.data[2];
  alpha = imgData.data[3];*/
    console.log(red /*+ " " + green + " " + blue + " " + alpha*/);
  };


  function reset() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  };
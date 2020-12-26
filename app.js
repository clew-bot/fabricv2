const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const purple = document.getElementById("purple");
const pink = document.getElementById("pink");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const black = document.getElementById("black");
const brown = document.getElementById("brown");
const surprise = document.getElementById("surprise");

const palleteColors = [
  {
  id: "red",
  text: "Red",
  color: "#FF0000"
},
  {
  id: "green",
  text: "Green",
  color: "#008000"
},
  {
  id: "red",
  text: "Red",
  color: "#FF0000"
},
  {
  id: "red",
  text: "Red",
  color: "#FF0000"
},
  {
  id: "red",
  text: "Red",
  color: "#FF0000"
},
  {
  id: "red",
  text: "Red",
  color: "#FF0000"
},
  {
  id: "red",
  text: "Red",
  color: "#FF0000"
},
]

renderSideMenu();
//function to enable drawing mode //
const drawing = document.getElementById("draw");
drawing.addEventListener("click", () => {  
    canvas.isDrawingMode = !canvas.isDrawingMode;
    canvas.isDrawingMode ? drawing.innerHTML = 'Cancel Drawing' : drawing.innerHTML = 'Enter drawing mode';        
});

//init//
const initCanvas = (id) => {
  const width = window.innerWidth*.8;
    return new fabric.Canvas(id, {
        width,
        height: width*.7,
        isDrawingMode: false        
    });
    
}

$(document).on("click", ".palleteBtn", function(){
  canvas.isDrawingMode = true
    canvas.freeDrawingBrush.color = $(this).attr("data-color");
    canvas.renderAll();
})

//Color buttons DRY AF//
// red.addEventListener("click", () => {
//   canvas.isDrawingMode = true
//     canvas.freeDrawingBrush.color = "#FF0000";
//     canvas.renderAll();
//   });
//   blue.addEventListener("click", () => {
//     canvas.isDrawingMode = true
//     canvas.freeDrawingBrush.color = "#0000FF";
//     canvas.renderAll();
// });
// green.addEventListener("click", () => {
//   canvas.isDrawingMode = true
//   canvas.freeDrawingBrush.color = "#008000";
//   canvas.renderAll();
// });
// purple.addEventListener("click", () => {
//   canvas.isDrawingMode = true
//   canvas.freeDrawingBrush.color = "#800080";
//   canvas.renderAll();
// });
// pink.addEventListener("click", () => {
//   canvas.isDrawingMode = true
//   canvas.freeDrawingBrush.color = "#FFC0CB";
//   canvas.renderAll();
// });
// orange.addEventListener("click", () => {
//   canvas.isDrawingMode = true
//   canvas.freeDrawingBrush.color = "#FFA500";
//   canvas.renderAll();
// });
// yellow.addEventListener("click", () => {
//   canvas.isDrawingMode = true
//   canvas.freeDrawingBrush.color = "#FFFF00";
//   canvas.renderAll();
// });
// black.addEventListener("click", () => {
//   canvas.isDrawingMode = true
//   canvas.freeDrawingBrush.color = "#000000";
//   canvas.renderAll();
// });
// brown.addEventListener("click", () => {
//   canvas.isDrawingMode = true
//   canvas.freeDrawingBrush.color = "#A52A2A";
//   canvas.renderAll();
// });

const canvas = initCanvas("canvas");

// window.addEventListener('resize', ()=> {
//   // const width = window.innerWidth*.8;
//   // canvas.width = width;
//   // canvas.height = width*.7;
//   // canvas.renderAll();
//   canvas = initCanvas('canvas')
// })
//create rectangle //
const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'aquablue',
    width: 20,
    height: 20,
    angle: 45
  });
  //create circle //
  const circle = new fabric.Circle({
    radius: 20, fill: 'blue', left: 100, top: 100
  });
  
// create triangle //
const triangle = new fabric.Triangle({
    width: 20, height: 30, fill: 'green', left: 50, top: 50
  });
//adding shapes ---- TODO integrate in button ---> DONE DUDDITZ 12/22 //
canvas.add(rect, circle, triangle);

//custom properties for rectangle //
//stoke width and color
rect.set({ strokeWidth: 5, 
           stroke: "hotpink" });
rect.set('angle', 15).set('flipY', true);
// rect.set('selectable', false);
rect.animate({'top': 250, "left": 300}, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
    easing: fabric.util.ease.easeOutBounce
  });
canvas.renderAll();

function renderSideMenu(){
  palleteColors.forEach(c => {
    $("#palleteCont").append(`<button id=${c.id} class="palleteBtn" data-color=${c.color}>${c.text}</button>`);
  })
}
//cartoons TODO: animate to buttons --> DONE DUDDITZ 12/22//

  //background image //
//   const imageUrl = "./images/background.png"
//   canvas.setBackgroundImage(imageUrl, canvas.renderAll.bind(canvas), {
//     // Optionally add an opacity lvl to the image //
//     backgroundImageOpacity: 0.5,
//     // should the image be resized to fit the container? //
//     backgroundImageStretch: true
// });

var comicSansText = new fabric.Text("I'm in Comic Sans", {
  fontFamily: 'Comic Sans'
  
});


const genText = document.getElementById("textGenerate");

//adding text function //
  genText.addEventListener("click", () => {
  const textBox = new fabric.Textbox("Lorum ipsum dolor sit amet", {
    left: 50,
    top: 10,
    width: 150,
    fontSize: 32,
  })
  textBox.animate('left', 250, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
    easing: fabric.util.ease.easeOutBounce
  });
  canvas.add(textBox).setActiveObject(textBox);
  // fonts.unshift('Times New Roman');
})

//things to do: 
// create buttons for shapes
// create text animation for input 
// style
// input heirarchy for image objects


// const shapes = document.getElementById("shapesId");

const clickShapes = document.getElementById("realShapes");

//ONCLICK FUNCTION //
const draw = () => {
    //THE STACKOVERFLOW GODS HAVE SPOKEN //
    var xvalue  = document.getElementById("shapesId").options[document.getElementById("shapesId").selectedIndex].value;
    //trapezoid that is made using x and y properties //
    var trapezoid = [ {x:-100,y:-50},{x:100,y:-50},{x:150,y:50},{x:-150,y:50} ]
    if (xvalue === "rectangle") {
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: "#F0E68C",
        width: 70,
        height: 70,
        stroke: "#008B8B"
    });
    rect.animate('left', 650, {
      onChange: canvas.renderAll.bind(canvas),
      duration: 2500,
      easing: fabric.util.ease.easeOutElastic
    })
    canvas.add(rect);
    canvas.renderAll();
    } 
    if(xvalue === "circle") {
      const circle = new fabric.Circle({
        radius: 60, 
        fill: 'yellow', 
        left: 100, 
        top: 100,
        stroke: "#d9b84c"
      });
      circle.animate('left', 650, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 2500,
        easing: fabric.util.ease.easeOutElastic
      })
      canvas.add(circle);
      canvas.renderAll();
    }
    if(xvalue === "triangle") {
      const triangle = new fabric.Triangle({
        width: 60, 
        height: 80, 
        fill: "#c291d9", 
        left: 50, 
        top: 50,
        stroke: "#5659b0"
      });
      triangle.animate('left', 750, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 2500,
        easing: fabric.util.ease.easeOutElastic
      })
      canvas.add(triangle);
      canvas.renderAll();
    }
    if (xvalue === "trapezoid") {
      const polygon = new fabric.Polygon(trapezoid, {
        top: 120,
        left: 100,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2
      });
        polygon.animate('left', 450, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 2500,
        easing: fabric.util.ease.easeOutElastic
      })
      canvas.add(polygon);
      canvas.renderAll();
    }
    if (xvalue === "ellipse") {
      var eli = new fabric.Ellipse({
        top: 150,
        left: 10,
        rx: 75,
        ry: 50,
        fill: "#fa0720",
        stroke: 'green',
        strokeWidth: 1
    });
      eli.animate('left', 550, {
      onChange: canvas.renderAll.bind(canvas),
      duration: 2500,
      easing: fabric.util.ease.easeOutElastic
    })
    canvas.add(eli);
    canvas.renderAll();
    }
};
// onclick function end //

//generate character function //
const genChar = () => {
  var yvalue  = document.getElementById("characterId").options[document.getElementById("characterId").selectedIndex].value;
  if (yvalue === "ml") {
    fabric.Image.fromURL('https://i.pinimg.com/originals/7b/cf/56/7bcf566cceb95899115a57b381ca0bbf.png', function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.2).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "clifford") {
    fabric.Image.fromURL('https://previews.dropbox.com/p/thumb/ABCSrbx6ktqXz5gh15a6K8uYw7QZXfIkjIH8RJRBYCkDZSKvZWAhVMXswtsLBdgBZaYWlxL0ANPoVagl777868GxHFb9r5juo_9hLDRBSmKgmG-SNWFA_96y-upEZ4w0vq1R1DRyAwQ_fxMoonP4b6hTojFfppikvXDlHmhaHpAUO2C_eNHVT7_2stlZ-kM7rFp0wmv3wiobSBzJGA88X0MrE7PTil_wpjbr70YeXc-ROnxnTaaJBWWXhTkaD8oad0CXto9ZLGDyD2PaEkpaGSEty2h0bZdbaB37X_wdvsuB6oZPodBDopdrxzmx4P6le4f6vhSZ3y1vZkd-cz16mJ7aKsKhKjDaM5C5YZIx4N4PT3LeDz2JsOtR6tNlZff1SvM/p.png', function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.8).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate({'top': 150, left: 300}, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "peppa") {
    fabric.Image.fromURL('https://static.wikia.nocookie.net/peppapedia/images/d/d9/Character_peppa.png', function(oImg) {
    // scale image down, and flip it, before adding it onto canvas //
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.8).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "molang") {
    fabric.Image.fromURL("https://images.squarespace-cdn.com/content/v1/5b0e8599af2096a0df635bd1/1551193871845-HUNU95ZPIEOE8D25QT94/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmx-YtV7KdJhhcFMxgH7DNwVWsr4BytTuzU0mdZNjZkC7ehjA8nxqmKGxR1QtMJl5J/Molang+no+bkg+or+stars.png?format=1500w", function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.2).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "booba") {
    fabric.Image.fromURL('https://i.pinimg.com/originals/c8/dc/cc/c8dcccbe33cd8e6ffef466e5362cd874.png', function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.2).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "sponge") {
    fabric.Image.fromURL('https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png', function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(1.0).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "rekt") {
    fabric.Image.fromURL("https://vignette.wikia.nocookie.net/charactercommunity/images/b/b0/Dcwb3hh-748f8461-d9e9-44f5-aa21-7c79405718a8.png", function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.2).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "blossom") {
    fabric.Image.fromURL("https://static.wikia.nocookie.net/powerpuff/images/2/23/Blossom-pic.png", function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.8).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "buttercup") {
    fabric.Image.fromURL("https://static.wikia.nocookie.net/powerpuff/images/5/55/Bellota_apariencia.png", function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.8).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate({'top': 250, "left" : 300}, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "bubbles") {
    fabric.Image.fromURL("https://static.wikia.nocookie.net/powerpuff/images/7/7b/Bubbles-pic.png", function(oImg) {
    // scale image down, and flip it, before adding it onto canvas //
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.8).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "scooby") {
    fabric.Image.fromURL("https://static.wikia.nocookie.net/warner-bros-entertainment/images/5/53/Scooby-Doo.png", function(oImg) {
    // scale image down, and flip it, before adding it onto canvas //
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(1.0).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "squidward") {
    fabric.Image.fromURL("https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png", function(oImg) {
    // scale image down, and flip it, before adding it onto canvas //
    //set method does fucking everything //
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.2).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "patrick") {
    fabric.Image.fromURL("https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png", function(oImg) {
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 1})
    oImg.scale(0.2).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "goku") {
    fabric.Image.fromURL("https://i.pinimg.com/originals/97/35/2a/97352a18b151610dc66f3f693e0b9196.png", function(oImg) {
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.2).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
  if (yvalue === "spiderman") {
    fabric.Image.fromURL("https://freepngimg.com/thumb/spiderman/35927-3-spiderman-comic-transparent-background.png", function(oImg) {
    oImg.set({hasBorders: true,borderColor: 'pink',borderSize: 2})
    oImg.scale(0.2).set('flipX', true);
    canvas.add(oImg);
    //animation //
    oImg.animate('top', 250, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
      });
  });
  }
}
// generate function end //

//remove object //
const removeEl = document.getElementById("removeEl");
removeEl.addEventListener("click", () => {
canvas.remove(canvas.getActiveObject()); 
})
//remove all //
const clearEverything = document.getElementById("removeAll");
clearEverything.addEventListener("click", () => {
canvas.remove(...canvas.getObjects());
})

//change line width //
const drawWidth = document.getElementById("drawingStroke");
drawWidth.addEventListener("change", () => {
  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.width = parseInt(drawWidth.value, 10) || 1;
  }
})

//save image as PNG //
const saveImage = document.getElementById("saveImg");
// saveImage.addEventListener("click", () => {
//   saveImage.href = canvas.toDataURL();
//   saveImage.download = "myAwesomeArtwork.png";
// }, false);

saveImage.addEventListener('click', function(ev) {
      const dataURL = canvas.toDataURL({
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0,
        format: 'png',
   });
   const link = document.createElement('a');
   link.download = 'image.png';
   link.href = dataURL;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
  })



//REFERENCES //
const pallete = fabric.Color.colorNameMap = {
  aliceblue:            '#F0F8FF',
  antiquewhite:         '#FAEBD7',
  aqua:                 '#00FFFF',
  aquamarine:           '#7FFFD4',
  azure:                '#F0FFFF',
  beige:                '#F5F5DC',
  bisque:               '#FFE4C4',
  black:                '#000000',
  blanchedalmond:       '#FFEBCD',
  blue:                 '#0000FF',
  blueviolet:           '#8A2BE2',
  brown:                '#A52A2A',
  burlywood:            '#DEB887',
  cadetblue:            '#5F9EA0',
  chartreuse:           '#7FFF00',
  chocolate:            '#D2691E',
  coral:                '#FF7F50',
  cornflowerblue:       '#6495ED',
  cornsilk:             '#FFF8DC',
  crimson:              '#DC143C',
  cyan:                 '#00FFFF',
  darkblue:             '#00008B',
  darkcyan:             '#008B8B',
  darkgoldenrod:        '#B8860B',
  darkgray:             '#A9A9A9',
  darkgrey:             '#A9A9A9',
  darkgreen:            '#006400',
  darkkhaki:            '#BDB76B',
  darkmagenta:          '#8B008B',
  darkolivegreen:       '#556B2F',
  darkorange:           '#FF8C00',
  darkorchid:           '#9932CC',
  darkred:              '#8B0000',
  darksalmon:           '#E9967A',
  darkseagreen:         '#8FBC8F',
  darkslateblue:        '#483D8B',
  darkslategray:        '#2F4F4F',
  darkslategrey:        '#2F4F4F',
  darkturquoise:        '#00CED1',
  darkviolet:           '#9400D3',
  deeppink:             '#FF1493',
  deepskyblue:          '#00BFFF',
  dimgray:              '#696969',
  dimgrey:              '#696969',
  dodgerblue:           '#1E90FF',
  firebrick:            '#B22222',
  floralwhite:          '#FFFAF0',
  forestgreen:          '#228B22',
  fuchsia:              '#FF00FF',
  gainsboro:            '#DCDCDC',
  ghostwhite:           '#F8F8FF',
  gold:                 '#FFD700',
  goldenrod:            '#DAA520',
  gray:                 '#808080',
  grey:                 '#808080',
  green:                '#008000',
  greenyellow:          '#ADFF2F',
  honeydew:             '#F0FFF0',
  hotpink:              '#FF69B4',
  indianred:            '#CD5C5C',
  indigo:               '#4B0082',
  ivory:                '#FFFFF0',
  khaki:                '#F0E68C',
  lavender:             '#E6E6FA',
  lavenderblush:        '#FFF0F5',
  lawngreen:            '#7CFC00',
  lemonchiffon:         '#FFFACD',
  lightblue:            '#ADD8E6',
  lightcoral:           '#F08080',
  lightcyan:            '#E0FFFF',
  lightgoldenrodyellow: '#FAFAD2',
  lightgray:            '#D3D3D3',
  lightgrey:            '#D3D3D3',
  lightgreen:           '#90EE90',
  lightpink:            '#FFB6C1',
  lightsalmon:          '#FFA07A',
  lightseagreen:        '#20B2AA',
  lightskyblue:         '#87CEFA',
  lightslategray:       '#778899',
  lightslategrey:       '#778899',
  lightsteelblue:       '#B0C4DE',
  lightyellow:          '#FFFFE0',
  lime:                 '#00FF00',
  limegreen:            '#32CD32',
  linen:                '#FAF0E6',
  magenta:              '#FF00FF',
  maroon:               '#800000',
  mediumaquamarine:     '#66CDAA',
  mediumblue:           '#0000CD',
  mediumorchid:         '#BA55D3',
  mediumpurple:         '#9370DB',
  mediumseagreen:       '#3CB371',
  mediumslateblue:      '#7B68EE',
  mediumspringgreen:    '#00FA9A',
  mediumturquoise:      '#48D1CC',
  mediumvioletred:      '#C71585',
  midnightblue:         '#191970',
  mintcream:            '#F5FFFA',
  mistyrose:            '#FFE4E1',
  moccasin:             '#FFE4B5',
  navajowhite:          '#FFDEAD',
  navy:                 '#000080',
  oldlace:              '#FDF5E6',
  olive:                '#808000',
  olivedrab:            '#6B8E23',
  orange:               '#FFA500',
  orangered:            '#FF4500',
  orchid:               '#DA70D6',
  palegoldenrod:        '#EEE8AA',
  palegreen:            '#98FB98',
  paleturquoise:        '#AFEEEE',
  palevioletred:        '#DB7093',
  papayawhip:           '#FFEFD5',
  peachpuff:            '#FFDAB9',
  peru:                 '#CD853F',
  pink:                 '#FFC0CB',
  plum:                 '#DDA0DD',
  powderblue:           '#B0E0E6',
  purple:               '#800080',
  rebeccapurple:        '#663399',
  red:                  '#FF0000',
  rosybrown:            '#BC8F8F',
  royalblue:            '#4169E1',
  saddlebrown:          '#8B4513',
  salmon:               '#FA8072',
  sandybrown:           '#F4A460',
  seagreen:             '#2E8B57',
  seashell:             '#FFF5EE',
  sienna:               '#A0522D',
  silver:               '#C0C0C0',
  skyblue:              '#87CEEB',
  slateblue:            '#6A5ACD',
  slategray:            '#708090',
  slategrey:            '#708090',
  snow:                 '#FFFAFA',
  springgreen:          '#00FF7F',
  steelblue:            '#4682B4',
  tan:                  '#D2B48C',
  teal:                 '#008080',
  thistle:              '#D8BFD8',
  tomato:               '#FF6347',
  turquoise:            '#40E0D0',
  violet:               '#EE82EE',
  wheat:                '#F5DEB3',
  white:                '#FFFFFF',
  whitesmoke:           '#F5F5F5',
  yellow:               '#FFFF00',
  yellowgreen:          '#9ACD32'
};
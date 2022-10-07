var background = document.getElementById("backgroundcolor");
var foreground = document.getElementById("foregroundcolor");
var luminanceF = 1;
var luminanceB = 0; 
var theText = document.getElementById("text");
var theTextLarge = document.getElementById("textLarge");
var textBox = document.getElementById("text_test")
var ratioText = document.getElementById("ratio");
var aaSmall = document.getElementById("certi_aa_small");
var aaLarge = document.getElementById("certi_aa_large");
var aaaSmall = document.getElementById("certi_aaa_small");
var aaaLarge = document.getElementById("certi_aaa_large");

var aaTestSmall = document.getElementById("Test_AAsmall");
var aaTestLarge = document.getElementById("Test_AAlarge");
var aaaTestSmall = document.getElementById("Test_AAAsmall");
var aaaTestLarge= document.getElementById("Test_AAAlarge");





background.addEventListener("input", function(){
  var theColor = background.value;
  textBox.style.backgroundColor = theColor;

  var rgbColorB = hexToRgb(theColor);
  luminanceB =relativeLuminanceW3C(rgbColorB[0], rgbColorB[1], rgbColorB[2])
  var ratio = calculateRatio(luminanceB, luminanceF);
  ratioText.innerHTML =Math.round(ratio * 100) /100;
  checkCerticates((Math.round(ratio *100))/100);
}, false);

foreground.addEventListener("input", function(){
    theColorF = foreground.value;

    theText.style.color = theColorF;
    theTextLarge.style.color = theColorF;

    var rgbColorF = hexToRgb(theColorF);
    luminanceF =relativeLuminanceW3C(rgbColorF[0], rgbColorF[1], rgbColorF[2])
    var ratio = calculateRatio(luminanceB, luminanceF);
    ratioText.innerHTML = Math.round(ratio * 100) /100;
    checkCerticates((Math.round(ratio *100))/100);
  }, false);



  function relativeLuminanceW3C(R8bit, G8bit, B8bit) {

    var RsRGB = R8bit/255;
    var GsRGB = G8bit/255;
    var BsRGB = B8bit/255;

    var R = (RsRGB <= 0.03928) ? RsRGB/12.92 : Math.pow((RsRGB+0.055)/1.055, 2.4);
    var G = (GsRGB <= 0.03928) ? GsRGB/12.92 : Math.pow((GsRGB+0.055)/1.055, 2.4);
    var B = (BsRGB <= 0.03928) ? BsRGB/12.92 : Math.pow((BsRGB+0.055)/1.055, 2.4);

    // For the sRGB colorspace, the relative luminance of a color is defined as: 
    var L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

    return L;
}




function hexToRgb (hex) {

    if (hex.charAt && hex.charAt(0) === '#') {
      hex = removeHash(hex)
    }
  
    if (hex.length === 3) {
      hex = expand(hex)
    }
  
    var bigint = parseInt(hex, 16)
    var r = (bigint >> 16) & 255
    var g = (bigint >> 8) & 255
    var b = bigint & 255
  
    return [r, g, b]
  }
  
  function removeHash (hex) {
  
    var arr = hex.split('')
    arr.shift()
    return arr.join('')
  }
  
  function expand (hex) {
  
    return hex
      .split('')
      .reduce(function (accum, value) {
  
        return accum.concat([value, value])
      }, [])
      .join('')
  }


  function calculateRatio(luminanceB,luminanceF){
    if(luminanceB > luminanceF){
        return (luminanceB +0.05) / (luminanceF +0.05)
    }else{
        return (luminanceF +0.05) / (luminanceB +0.05)

    }
  }


function checkCerticates(ratio){
  if(ratio >=  4.5){
    aaSmall.style.backgroundColor = '#51f081';
    aaTestSmall.innerText = "Passou";
  }
  else{
      aaSmall.style.backgroundColor = '#F4001D'
      aaTestSmall.innerText = "Não Passou";
  }
  if(ratio>= 3) {
    aaLarge.style.backgroundColor = '#51f081';
    aaTestLarge.innerHTML = "Passou";
  }
  else{
    aaLarge.style.backgroundColor="#F4001D"
    aaTestLarge.innerHTML = "Não Passou"
  }
  if(ratio >= 7) {
    aaaSmall.style.backgroundColor = "#51f081";
    aaaTestSmall.innerHTML = "Passou";
  }
  else{
    aaaSmall.style.backgroundColor = "#F4001D"
    aaaTestSmall.innerHTML = "Não Passou"
  }
  if(ratio >= 4.5) {
    aaaLarge.style.backgroundColor = "#51f081";
    aaaTestLarge.innerHTML = "Passou";
  }else{
    aaaLarge.style.backgroundColor = "#F4001D"
    aaaTestLarge.innerHTML = "Não Passou"
  }
}
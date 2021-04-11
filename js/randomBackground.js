var bgColorArray = ['assets/images/redMoon.jpg','assets/images/scentCandle.jpg','assets/images/star.jpg'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

document.body.style.backgroundImage = 'url(' + selectBG + ')';
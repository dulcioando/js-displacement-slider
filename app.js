// images setup
const images = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
];

// content setup
const texts = [
   ["Straight Drop", "Surface gravity: 9.807 m/s²"],
   ["Corona Bottle", "DrinkUp Timing: 3.711 m/s²"],
   ["Fruity Loops", "Sample Speed: 8.87 m/s²"],
]

// init plugin 
rgbKineticSlider = new rgbKineticSlider({

    slideImages: images, // array of images > must be 1920 x 1080
    itemsTitles: texts, // array of titles / subtitles
  
    backgroundDisplacementSprite: 'img/map-7.jpg', // slide displacement image 
    cursorDisplacementSprite: 'img/displace-circle.png', // cursor displacement image
  
    cursorImgEffect : true, // enable cursor effect
    cursorTextEffect : false, // enable cursor text effect
    cursorScaleIntensity : 0.1, // cursor effect intensity
    cursorMomentum : 0.3, // lower is slower
  
    swipe: true, // enable swipe
    swipeDistance : window.innerWidth * 0.4, // swipe distance - ex : 580
    swipeScaleIntensity: 1, // scale intensity during swipping
  
    slideTransitionDuration : 1, // transition duration
    transitionScaleIntensity : 30, // scale intensity during transition
    transitionScaleAmplitude : 160, // scale amplitude during transition
  
    nav: true, // enable navigation
    navElement: '.main-nav', // set nav class
  
    imagesRgbEffect : true, // enable img rgb effect
    imagesRgbIntensity : 0.9, // set img rgb intensity
    navImagesRgbIntensity : 80, // set img rgb intensity for regular nav 
  
    textsDisplay : true, // show title
    textsSubTitleDisplay : true, // show subtitles
    textsTiltEffect : true, // enable text tilt
    googleFonts : ['Playfair Display:700', 'Roboto:400'], // select google font to use
    buttonMode : false, // enable button mode for title
    textsRgbEffect : true, // enable text rgb effect
    textsRgbIntensity : 1, // set text rgb intensity
    navTextsRgbIntensity : 15, // set text rgb intensity for regular nav
  
    textTitleColor : 'white', // title color
    textTitleSize : 125, // title size
    mobileTextTitleSize : 125, // title size
    textTitleLetterspacing : 3, // title letterspacing
  
    textSubTitleColor : 'white', // subtitle color ex : 0x000000
    textSubTitleSize : 21, // subtitle size
    mobileTextSubTitleSize : 21, // mobile subtitle size
    textSubTitleLetterspacing : 2, // subtitle letter spacing
    textSubTitleOffsetTop : 90, // subtitle offset top
    mobileTextSubTitleOffsetTop : 90, // mobile subtitle offset top
});
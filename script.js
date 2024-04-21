function getRandomColor() {
  
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  
    // Create a CSS-formatted color string
    var color = "rgb(" + red + "," + green + "," + blue + ")";
  
    return color;
  }
  
  setInterval(() => {
  
      document.querySelector("body").style.backgroundColor=getRandomColor();
  },6000);



 
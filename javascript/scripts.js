
// display thank you message upon clicking submit
document.getElementById('submit').onclick = function(){
    alert("Thank you for your message! I'll get back to you within 3 business days.");
  };

// change hue of the album cover image on mouseover
document.getElementsByClassName('album-cover').onmouseover(){
    image.style.filter = 'hue-rotate(90deg)'; // Changes the hue of the image
  }

// display copyright notice on right click
document.getElementsByClassName('album-cover').oncontextmenu(){
    alert("Image copyright-protected");
  }

// display welcome message when home page loads
homepage.onload = function(){
    alert("Welcome!");
};

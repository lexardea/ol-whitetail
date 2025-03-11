
document.getElementById('submit').onclick = function(){
    alert("Thank you for your message! I'll get back to you within 3 business days.");
  };

document.getElementsByClassName('album-cover').onmouseover(){
    image.style.filter = 'hue-rotate(90deg)'; // Changes the hue of the image
  }

document.getElementsByClassName('album-cover').oncontextmenu(){
    alert("Image copyright-protected");
  }

homepage.onload = function(){
    alert("Welcome!");
};

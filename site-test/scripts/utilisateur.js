let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src','class="displayed1"');
    if (mySrc === 'images/01.jpg') {
      myImage.setAttribute('src','class="displayed1" ,'images/02.jpeg')' ;
    } else {
      myImage.setAttribute('src','class="displayed1" ,'images/01.jpeg')' ;
    }
});
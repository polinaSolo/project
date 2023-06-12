var pictures = ["images/1p.jpeg", "images/2p.jpeg", "images/3p.jpeg", "images/4p.jpeg", "images/5p.jpeg"];
var smallPic = document.getElementsByClassName('thumbnail');
var PicNum = 0;

function GettingPictures(n) {
    document.getElementById('mainImage').src = pictures[n];
    document.getElementById('imageCaption').innerHTML = smallPic[n].querySelector('img').alt;
    PicNum = n;
}

function showPreviousImage() {
    var previousImg = PicNum - 1;
    if (previousImg < 0) {
        previousImg = pictures.length - 1;
    }
    document.getElementById('mainImage').src = pictures[previousImg];
    document.getElementById('imageCaption').innerHTML = smallPic[previousImg].querySelector('img').alt;
    PicNum = previousImg;
}

function showNextImage() {
    var nextImg = PicNum + 1;
    if (nextImg >= pictures.length) {
        nextImg = 0;
    }
    document.getElementById('mainImage').src = pictures[nextImg];
    document.getElementById('imageCaption').innerHTML = smallPic[nextImg].querySelector('img').alt;
    PicNum = nextImg;
}








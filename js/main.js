var imgs = Array.from(document.getElementsByClassName("card-img-top"))
var lightBoxContainer = document.getElementById("lightinigBoxContainer")
var lightBoxItem = document.getElementById("lightningBoxItem")
var closeBtn = document.getElementById("close")
var leftBtn = document.getElementById("left")
var rightBtn = document.getElementById("right")
var movingSlide = 0

var animate = `animation-name: slide;
animation-duration: 1.5s;
@keyframes slide {
    from {opacity: .4}
    to {opacity: 1}
}
`

//Open
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (path) {
        movingSlide = imgs.indexOf(path.target)
        var imgsource = path.target.src
        lightBoxItem.style.backgroundImage = `url(${imgsource})`
        lightBoxContainer.style.display = "flex"
        lightBoxItem.style.cssText = animate
    })
}

//close
closeBtn.addEventListener("click", close)
function close() {
    lightBoxContainer.style.display = "none"
}


//Left 
leftBtn.addEventListener("click", moveLeft)
function moveLeft() {
    movingSlide++
    if (movingSlide == imgs.length) {
        movingSlide = 0
    }
    var leftImg = imgs[movingSlide].src
    // imgs[movingSlide].style.cssText = `
    // animation-name: slide;
    // animation-duration: 1.5s;
    // @keyframes slide {
    //     from {opacity: .4}
    //     to {opacity: 1}
    // }
    // `
    console.log(imgs[movingSlide].style.cssText)
    lightBoxItem.style.backgroundImage=`url(${leftImg})`
    // lightBoxItem.style.animation=imgs[movingSlide].style.cssText
}

//Right
rightBtn.addEventListener("click", moveRight)
function moveRight() {
    movingSlide--
    if (movingSlide == 0) {
        movingSlide = imgs.length - 1
    }
    var rightImg = imgs[movingSlide].src
    // lightBoxItem.style = `
    // background-image:url(${rightImg})
    // animation-name: slide;
    // animation-duration: 1.5s;
    // @keyframes slide {
    //     from {opacity: .4}
    //     to {opacity: 1}
    // }
    // `
    lightBoxItem.style.backgroundImage=`url(${rightImg})`
}


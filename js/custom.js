const bannerImg = document.querySelector(".banner-b")
const bannerText = document.querySelector(".banner-text")

bannerText.addEventListener("mouseover", function(){
    bannerImg.style.transform = "scale(1.1)"
})
bannerText.addEventListener("mouseout", function(){
    bannerImg.style.transform = "scale(1.0)"
})

const photo = document.querySelector(".photo")
const left = document.querySelector(".left")
const rigth = document.querySelector(".rigth")
const photo1 = document.querySelector(".photo1")
const photo2 = document.querySelector(".photo2")
console.dir(photo)

const imgs = [`./download (1).jpg`, `./download (2).jpg`, `./download (3).jpg`]

let i = 0

rigth.addEventListener(`click`, () => {
  
    if (i === 2) {
        i = 0
    } else {
        i = i + 1
    }
    photo.attributes[0].value = imgs[i]
    photo1.attributes[0].value = imgs[i===0? 2 : (i-1)]
    photo2.attributes[0].value = imgs[i===2? 0 : (i+1)]
    
})

left.addEventListener(`click`, () => {
 
    if (i === 0) {
        i = 2
    } else {
        i = i-1
    }
    photo.attributes[0].value = imgs[i]
    photo1.attributes[0].value = imgs[i===2? 0 : (i+1)]
    photo2.attributes[0].value = imgs[i===0? 2 : (i-1)]
    })

    document.addEventListener("keydown", (event) =>{
        if(event.keyCode===39){
            if (i === 2) {
                i = 0
            } else {
                i = i + 1
            }
            photo.attributes[0].value = imgs[i]
            photo1.attributes[0].value = imgs[i===0? 2 : (i-1)]
            photo2.attributes[0].value = imgs[i===2? 0 : (i+1)]
        }else if(event.keyCode===37){
            if (i === 0) {
                i = 2
            } else {
                i = i-1
            }
            photo.attributes[0].value = imgs[i]
            photo1.attributes[0].value = imgs[i===2? 0 : (i+1)]
            photo2.attributes[0].value = imgs[i===0? 2 : (i-1)]
        }
        console.dir(event)
    })
let item_img = document.querySelectorAll(".item_img");
let item_block_slide = document.querySelectorAll(".item_block_slide");
let section_products_img_div = document.querySelectorAll(".section_products_img_div");

for (let i = 0; i < item_img.length; i++) {
    item_img[i].addEventListener("mousemove", (e) => {
        item_block_slide[i].style.transform = "translateX(0%)";
        section_products_img_div[i].style.opacity = "0.5";
    })
    item_img[i].addEventListener("mouseout", (e) => {
        item_block_slide[i].style.transform = "translateX(-101%)";
        section_products_img_div[i].style.opacity = "1";
    })
}

let images_conteiner = document.querySelector(".images_conteiner");
let div_images_pointer_first = document.querySelectorAll(".div_images_pointer")[0];
let div_images_pointer_last = document.querySelectorAll(".div_images_pointer")[1];

let images_conteiner_absolute = document.querySelector("#images_conteiner_abs");
let transformImg = 0;

div_images_pointer_last.onclick = go;
function go(){
    transformImg -= 33.33;
    if(transformImg > -99.99){
        images_conteiner_absolute.style.position = "absolute";
        images_conteiner.style.transform = `translate(${transformImg}%)`;
    }
    else{
        transformImg = 0;
        images_conteiner.style.transform = `translate(${transformImg}%)`;
    }
};
div_images_pointer_first.addEventListener("click", () => {
    transformImg += 33.33;
    if(transformImg > 0){
        transformImg = -66.66;
        images_conteiner.style.transform = `translate(${transformImg}%)`;
    }
    else{
        images_conteiner.style.transform = `translate(${transformImg}%)`;
    }
});
setInterval(go, 3000);

// add items 

let section_item_cont = document.querySelector(".section_item_cont");

class itemAdd {
    constructor(name) {
        this.name = name;
    }
    Add(imgSrc, tit, price) {
        function creat(what, wher, classes) {
            let divs = document.createElement(what);
            divs.setAttribute("class", classes);
            wher.append(divs);
            return divs;
        }
        let item_block = creat("div", section_item_cont, "item_block");
        let item_block_img = creat("div", item_block, "item_block_img");
        let a = creat("a", item_block_img, "");
        a.setAttribute("href", "#");
        let img = creat("img", a, "item_img");
        img.src = imgSrc;


        let item_block_slide = creat("div", item_block, "item_block_slide");
        let item_block_slide_cont = creat("div", item_block_slide, "item_block_slide_cont");
        let item_block_slide_title = creat("h3", item_block_slide_cont, "item_block_slide_title");
        item_block_slide_title.innerHTML = tit;


        item_block.addEventListener("mousemove", (e) => {
            item_block_slide.style.transform = "translateX(0%)";
            item_block_img.style.opacity = "0.5";
        });
        item_block.addEventListener("mouseout", (e) => {
            item_block_slide.style.transform = "translateX(-101%)";
            item_block_img.style.opacity = "1";
        });

        let item_block_slide_price = creat("h3", item_block_slide_cont, "item_block_slide_price");
        item_block_slide_price.innerHTML = price + "$";



        let item_block_slide_heart = creat("div", item_block_slide_cont, "item_block_slide_heart");
        let item_block_slide_heartI = creat("i", item_block_slide_heart, "fas fa-heart");
        item_block_slide_heartI.onclick = heartActive;
        function heartActive() {
            item_block_slide_heartI.style.color = "orangered";
            item_block_slide_heartI.onclick = heartPassive;
        }
        function heartPassive() {
            item_block_slide_heartI.style.color = "black";
            item_block_slide_heartI.onclick = heartActive;
        }
    }
}

let x = new itemAdd;


// bracelets 
if (document.title == "Bracelets") {
    x.Add("../img/bracelets/1.jpg", "Niuyitid for man", 1);
    x.Add("../img/bracelets/2.jpg", "Femme Bracenets", 0.5);
    x.Add("../img/bracelets/3.jpg", "Bangle Bracelet", 1.3);
    x.Add("../img/bracelets/4.jpg", "Chain Bracelet", 0.6);
    x.Add("../img/bracelets/5.jpg", "Tennis Bracelet", 2);
    x.Add("../img/bracelets/6.jpg", "stile for man", 1.5);
    x.Add("../img/bracelets/7.jpg", "Cuff Bracelet", 1);
    x.Add("../img/bracelets/8.jpg", "Designer Bracelet", 0.3);
    x.Add("../img/bracelets/9.jpg", "Charm Bracelet", 3);
    x.Add("../img/bracelets/10.jpg", "Beaded Bracelet", 0.8);
    x.Add("../img/bracelets/11.jpg", "Pearl Bracelet", 2.2);
    x.Add("../img/bracelets/12.jpg", "Friendship Bracelet", 1.2);
}
// chains
else if (document.title == "Chains") {
    x.Add("../img/chains/1.jpg", "gold chain", 1);
    x.Add("../img/chains/2.jpg", "Mariner chain", 0.5);
    x.Add("../img/chains/3.jpg", "bead chain", 1);
    x.Add("../img/chains/4.jpg", "cross chain", 0.6);
    x.Add("../img/chains/5.jpg", "cable chain", 1.4);
    x.Add("../img/chains/6.jpg", "curb chain", 1.5);
    x.Add("../img/chains/7.jpg", "love chain", 0.8);
    x.Add("../img/chains/8.jpg", "rope chain", 1);
    x.Add("../img/chains/9.jpg", "spiga chain", 1.2);
    x.Add("../img/chains/10.jpg", "snake chain", 3);
    x.Add("../img/chains/11.jpg", "wheat chain", 0.9);
    x.Add("../img/chains/12.jpg", "rolo chain", 2);
}
// Watchs
else if (document.title == "Watchs") {
    x.Add("../img/watchs/1.jpg", "carnival 1984", 5);
    x.Add("../img/watchs/2.jpg", "piguet", 7);
    x.Add("../img/watchs/3.jpg", "nesun", 5);
    x.Add("../img/watchs/4.jpg", "baosaili", 10);
    x.Add("../img/watchs/5.jpg", "t-winner", 8);
    x.Add("../img/watchs/6.jpg", "two cartier", 14);
    x.Add("../img/watchs/7.jpg", "nibosi", 10);
    x.Add("../img/watchs/8.jpg", "kimio", 7);
    x.Add("../img/watchs/9.jpg", "lorai", 5);
    x.Add("../img/watchs/10.jpg", "braitling", 9);
    x.Add("../img/watchs/11.jpg", "ulisse nardin gold", 15);
    x.Add("../img/watchs/12.jpg", "ulisse nardin blue", 14);
}
// Glasses
else if (document.title == "Glasses") {
    x.Add("../img/glasses/1.jpg", "ray ban", 5);
    x.Add("../img/glasses/2.jpg", "clubmaster", 3);
    x.Add("../img/glasses/3.jpg", "aofly", 6);
    x.Add("../img/glasses/4.jpg", "dingyi", 4);
    x.Add("../img/glasses/5.jpg", "tortoise", 7);
    x.Add("../img/glasses/6.jpg", "huhaitang", 3);
    x.Add("../img/glasses/7.jpg", "shades", 9);
    x.Add("../img/glasses/8.jpg", "alex perry", 4);
    x.Add("../img/glasses/9.jpg", "burberry", 4);
    x.Add("../img/glasses/10.jpg", "taotaoqi", 2);
    x.Add("../img/glasses/11.jpg", "arrival", 5);
    x.Add("../img/glasses/12.jpg", "bls", 7);
}





let item_block_slide_heart = document.querySelectorAll(".item_block_slide_heart");
let header_shopee_panel_items_count = header_shopee_panel_items.querySelector("span");
let countItems = 0;
let totalPrice = 0;
let arrForTotal = [];
let arrForValue = [];


let arrForLocal = [];


function creat(what, where, classname) { // shablone
    let divs = document.createElement(what);
    divs.setAttribute("class", classname);
    where.append(divs);
    return divs;
}

class AddItemsCard {
    constructor() {

    }
    add() {
        let active = this.querySelector("i");
        if (active.style.color == "orangered") {
            countItems++;
            header_shopee_panel_items_count.innerHTML = countItems;
            let imgSrc = this.parentElement.parentElement.parentElement.querySelector(".item_img").src;
            let imgName = this.parentElement.querySelector(".item_block_slide_title").innerHTML;
            let imgPrice = this.parentElement.querySelector(".item_block_slide_price").innerHTML;


            let basket_item = creat("div", section_basket_cont, "basket_item flex");
            let basket_item_img = creat("div", basket_item, "basket_item_img");
            let basket_item_imgI = creat("img", basket_item_img, "");
            basket_item_imgI.src = imgSrc;



            let basket_item_cont = creat("div", basket_item, "basket_item_cont");
            let basket_item_name = creat("h3", basket_item_cont, "basket_item_name");
            basket_item_name.innerHTML = imgName;


            let basket_item_price = creat("span", basket_item_cont, "basket_item_price");
            basket_item_price.innerHTML = imgPrice;


            let basket_item_close = creat("div", basket_item, "basket_item_close");
            let basket_item_closeSpan = creat("span", basket_item_close, "");
            let basket_item_closeI = creat("i", basket_item_closeSpan, "fas fa-close");



            let basket_item_inp = creat("input", basket_item_cont, "basket_item_inp");
            basket_item_inp.setAttribute("type", "number");
            basket_item_inp.value = 1;

            totalPrice += parseFloat(imgPrice) * basket_item_inp.value;
            arrForTotal.push(parseFloat(imgPrice));



            basket_item_inp.addEventListener("input", (e) => {
                if (basket_item_inp.value < 1) {
                    basket_item_price.innerHTML = imgPrice;
                    section_basket_allPrice_cont.innerHTML = `${totalPrice + (parseFloat(imgPrice) * (basket_item_inp.value))}$`;
                    basket_item_inp.value = "";
                }
                else {
                    let priceForTotal = (parseFloat(imgPrice) * basket_item_inp.value);
                    totalPrice = priceForTotal;
                    basket_item_price.innerHTML = `${parseFloat(imgPrice) * basket_item_inp.value}$`;

                    section_basket_allPrice_cont.innerHTML = `${totalPrice}$`;
                    if (parseFloat(totalPrice) > document.querySelector("#header_more_price").innerHTML) {
                        section_basket_allPrice_cont.style.color = "red";
                    }
                    else {
                        section_basket_allPrice_cont.style.color = "black";
                    }

                }
            });
            if (parseFloat(totalPrice) > document.querySelector("#header_more_price").innerHTML) {
                section_basket_allPrice_cont.style.color = "red";
            }
            else {
                section_basket_allPrice_cont.style.color = "black";
            }
            // close slide
            basket_item.addEventListener("mousemove", (e) => {
                basket_item_close.style.transform = "translateX(0)";
            })
            basket_item.addEventListener("mouseout", (e) => {
                basket_item_close.style.transform = "translateX(50px)";
            });
            // close function
            basket_item_closeI.addEventListener("click", () => {
                totalPrice -= parseFloat(this.parentElement.querySelector(".item_block_slide_price").innerHTML) * basket_item_inp.value;
                section_basket_allPrice_cont.innerHTML = `${totalPrice}$`;
                close();
            });



            arrForLocal.push(basket_item);
            localStorage.setItem('arrForLocal', JSON.stringify(arrForLocal));
            console.log(JSON.parse(localStorage.getItem('arrForLocal')));



            section_basket_allPrice_cont.innerHTML = `${totalPrice}$`;
        }
        else {
            totalPrice -= parseFloat(this.parentElement.querySelector(".item_block_slide_price").innerHTML) * basket_item_inp.value;
            section_basket_allPrice_cont.innerHTML = `${totalPrice}$`;
            close()
        }
        function close() {
            let remove_item = section_basket_cont.querySelector(".basket_item_name").parentElement.parentElement;
            remove_item.remove();
            countItems--;
            header_shopee_panel_items_count.innerHTML = countItems;
            active.style.color = "black";
        }
        section_basket_allPrice_cont.innerHTML = `${totalPrice}$`;
    }
}
let basket = new AddItemsCard;


item_block_slide_heart.forEach(e => {
    e.addEventListener("click", basket.add)
});








// totalPrice
let section_basket_allPrice = creat("div", section_basket_cont, "section_basket_allPrice");
let section_basket_allPrice_cont = creat("span", section_basket_allPrice, "");
section_basket_allPrice_cont.innerHTML = "0$";

let section_basket_allBye = creat("div", section_basket_cont, "section_basket_allBye");
let section_basket_allBye_cont = creat("button", section_basket_allBye, "");
section_basket_allBye_cont.innerHTML = "bye all";







// discount
let header_more_content_discount = document.querySelector(".header_more_content_discount");
let header_more_discount_0 = document.querySelector(".header_more_discount_0");
let header_more_discount_30 = document.querySelector(".header_more_discount_30");
let header_more_content_disc = document.querySelector(".header_more_content_disc");
let header_more_content_disc_i = document.querySelector(".header_more_content_disc").querySelector("i");

function headerDisc(e) {
    e.stopPropagation();
    header_more_content_disc_i.style.transform = "rotate(180deg)";
    header_more_content_discount.style.height = "240px";
    header_more_content_disc.onclick = headerDiscN;
}
function headerDiscN() {
    header_more_content_disc_i.style.transform = "rotate(0deg)";
    header_more_content_discount.style.height = "0px";
    header_more_content_disc.onclick = headerDisc;
}
document.addEventListener("click", headerDiscN);
header_more_discount_0.onclick = () => {
    header_more_discount_0.querySelector("input").checked = true;
    if (document.title == "Shop" || document.title == "Register") {
        return;
    }
    else {
        let item_block_slide_price_new_arr = document.querySelectorAll(".item_block_slide_price_new");
        if (item_block_slide_price_new_arr) {
            for (let i = 0; i < arr_item_block_slide_price.length; i++) {
                arr_item_block_slide_price[i].style["text-decoration"] = "none";
                arr_item_block_slide_price[i].style.color = "black";

                if (item_block_slide_price_new_arr[i]) {
                    item_block_slide_price_new_arr[i].remove()
                }

                // let arr_item_block_slide_span = document.createElement("span");
                // arr_item_block_slide_span.innerHTML = (parseFloat(arr_item_block_slide_price[i].innerHTML) - ((parseFloat(arr_item_block_slide_price[i].innerHTML) / 100) * 30)).toFixed(2);
                // arr_item_block_slide_span.setAttribute("class", "item_block_slide_price");
                // arr_item_block_slide_cont[i].insertBefore(arr_item_block_slide_span, arr_item_block_slide_heart[i])
            }
        }
    }
}
let arr_item_block_slide_price = document.querySelectorAll(".item_block_slide_price");
let arr_item_block_slide_cont = document.querySelectorAll(".item_block_slide_cont");
let arr_item_block_slide_heart = document.querySelectorAll(".item_block_slide_heart");
header_more_discount_30.onclick = () => {
    header_more_discount_30.querySelector("input").checked = true;
    if (document.title == "Shop" || document.title == "Register") {
        return;
    }
    else {
        for (let i = 0; i < arr_item_block_slide_price.length; i++) {
            arr_item_block_slide_price[i].style["text-decoration"] = "line-through";
            arr_item_block_slide_price[i].style.color = "gray";

            let arr_item_block_slide_span = document.createElement("span");
            arr_item_block_slide_span.innerHTML = (parseFloat(arr_item_block_slide_price[i].innerHTML) - ((parseFloat(arr_item_block_slide_price[i].innerHTML) / 100) * 30)).toFixed(2);
            arr_item_block_slide_span.setAttribute("class", "item_block_slide_price_new");
            arr_item_block_slide_cont[i].insertBefore(arr_item_block_slide_span, arr_item_block_slide_heart[i])
        }
    }
}

// header

let header_hide_panel_heart = document.querySelector(".header_hide_panel_heart");
let header_hide_panel_heart_i = document.querySelector(".header_hide_panel_heart").querySelector("i");


header_hide_panel_heart.onclick = headerHeartOrange;
function headerHeartOrange() {
    header_hide_panel_heart_i.style.color = "orangered";
    header_hide_panel_heart_bol = false;
    header_hide_panel_heart.onclick = headerHeartWhite;
    header_hide_panel_heart.onmousemove = null;
    header_hide_panel_heart.onmouseout = null;
}
function headerHeartWhite() {
    header_hide_panel_heart_i.style.color = "white";
    header_hide_panel_heart_bol = true;
    header_hide_panel_heart.onclick = headerHeartOrange;
    header_hide_panel_heart.onmousemove = () => {
        header_hide_panel_heart_i.style.color = "rgb(76, 128, 241)";
    }
    header_hide_panel_heart.onmouseout = () => {
        header_hide_panel_heart_i.style.color = "white";
    }
}




let header = document.querySelector(".header");
let header_hide_panel_arrow = document.querySelector(".header_hide_panel_arrow");
let header_hide_panel_arrow_i = document.querySelector(".header_hide_panel_arrow").querySelector("i");
let section_home_leng = document.querySelector(".section_home_leng");


header_hide_panel_arrow.onclick = headerHeightNone;
function headerHeightNone() {
    header.style.height = 0;
    header.style.overflow = "hidden";
    header_hide_panel_arrow.classList.add("header_hide_panel_arrow_click");
    header_hide_panel_arrow_i.style.transform = "rotate(180deg)";
    section_home_leng.style["margin-top"] = "0px";
    header_hide_panel_arrow.onclick = headerHeight60;
};
function headerHeight60() {
    header.style.height = "60px";
    setTimeout(() => {
        header_hide_panel_arrow.classList.remove("header_hide_panel_arrow_click");
    }, 500);
    header_hide_panel_arrow_i.style.transform = "rotate(0deg)";
    section_home_leng.style["margin-top"] = "60px";
    header_hide_panel_arrow.onclick = headerHeightNone;
    header.style.overflow = "inherit";
}




let header_more_content_want = document.querySelector(".header_more_content_want");
let header_more_content_want_i = document.querySelector(".header_more_content_want").lastElementChild.querySelector("i");
let header_more_content_price = document.querySelector(".header_more_content_price");
let header_more_price_once = document.querySelector(".header_more_price_once");
let header_more_price_multiple = document.querySelector(".header_more_price_multiple");
let header_more_price = document.querySelector("#header_more_price");


header_more_content_want.onclick = headerMore;
function headerMore(e) {
    e.stopPropagation();
    header_more_content_want_i.style.transform = "rotate(180deg)";
    header_more_content_price.style.height = "240px";
    header_more_content_want.onclick = headerMoreN;
}
function headerMoreN() {
    header_more_content_want_i.style.transform = "rotate(0deg)";
    header_more_content_price.style.height = "0px";
    header_more_content_want.onclick = headerMore;
}
document.addEventListener("click", headerMoreN);

if (localStorage.getItem("price")) {
    header_more_price.innerHTML = localStorage.getItem("price");
}
if (localStorage.getItem("price") == 10) {
    document.querySelectorAll(".header_more_price_radio")[0].querySelector("input").checked = true;
}
else if (localStorage.getItem("price") == 15) {
    document.querySelectorAll(".header_more_price_radio")[1].querySelector("input").checked = true;
}
header_more_price_once.onclick = function () {
    document.querySelectorAll(".header_more_price_radio")[0].querySelector("input").checked = true;
    localStorage.setItem("price", document.querySelector(".qiwi").innerHTML);
    header_more_price.innerHTML = localStorage.getItem("price");
}
header_more_price_multiple.onclick = function () {
    document.querySelectorAll(".header_more_price_radio")[1].querySelector("input").checked = true;
    localStorage.setItem("price", document.querySelector(".webmoney").innerHTML);
    header_more_price.innerHTML = localStorage.getItem("price");
}




let header_shopee_panel_items = document.querySelector(".header_shopee_panel_items");
let section_basket = document.querySelector(".section_basket");
let section_basket_cont = document.querySelector(".section_basket_cont");
header_shopee_panel_items.addEventListener("click", () => {
    section_basket.style.display = "block";
});
section_basket.addEventListener("click", () => {
    section_basket.style.display = "none";
});
section_basket_cont.addEventListener("click", (e) => {
    e.stopPropagation();
});






let login = document.querySelector(".login");
let signIn = document.querySelector(".sign_in");
let login_cont = document.querySelector(".login_cont");

signIn.addEventListener("click", () => {
    login.style.display = "block";
});
login.addEventListener("click", () => {
    login.style.display = "none";
});
login_cont.addEventListener("click", (e) => {
    e.stopPropagation();
});







let footer_item = document.querySelectorAll(".footer_item");
let footer_title_span = document.querySelectorAll(".footer_title_span");

for (let i = 0; i < footer_item.length; i++) {
    footer_item[i].onclick = function height175(e) {
        e.stopPropagation();
        footer_title_span[i].style.color = "orangered";
        footer_item[i].style.height = "175px";
        for (let j = 0; j < footer_item.length; j++) {
            if (j == i) {
                continue;
            }
            else {
                footer_title_span[j].style.color = "white";
                footer_item[j].style.height = "20px";
            }
        }
        footer_item[i].onclick = function height20() {
            footer_title_span[i].style.color = "white";
            footer_item[i].style.height = "20px";
            footer_item[i].onclick = height175;
        }
    };
    document.addEventListener("click", () => {
        for (let i = 0; i < footer_item.length; i++) {
            footer_title_span[i].style.color = "white";
            footer_item[i].style.height = "20px";

        }
    })
}

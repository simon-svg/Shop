let section_forms_cont_but = document.querySelector(".section_forms_cont_but").querySelector("span");
let section_forms_cont_but_inp = document.querySelector(".section_forms_cont_but").querySelector("input");

section_forms_cont_but.addEventListener("click", () => {
    if (section_forms_cont_but_inp.checked == true) {
        section_forms_cont_but_inp.checked = false;
    }
    else {
        section_forms_cont_but_inp.checked =  true;
    }
})



let section_creat_signin = document.querySelector(".section_creat_signin").querySelector("span");
section_creat_signin.addEventListener("click", () => {
    login.style.display = "block";
})
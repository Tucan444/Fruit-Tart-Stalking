let main_desc = "Purpose of this webpage is to gather info about characters in anime Dropout Idol Fruit Trart.<br/><br/>You might ask : But why?<br/>Answer : Yes<br/><br/>On the top of the page you have link to pages on all the main characters. Clicking on logo sends you back here.<br/>Hope you'll enjoy.";
let ino_main_desc = "Ino is very cheerful girl. Shes also liked by others for her personality.<br/><br/>- Gender: Female <br/>- Height: 155cm <br/>- Weight: 47kg <br/>- Hair_color: pink <br/>- Eye_color: blue";
let hemo_main_desc = "Hemo likes Ino, maybe way too much.<br/><br/>- Gender: Female<br/>- Height: 145cm<br/>- Weight: 37kg<br/>- Hair_color: chestnut brown<br/>- Eye_color: amber";
let hoho_main_desc = "Shes manager of the other girls, can be pushy and weird. (also shes single)<br/><br/>- Gender: Female<br/>- Height: 165cm<br/>- Weight: 51kg<br/>- Hair_color: dark brown<br/>- Eye_color: dark brown";
let hayu_main_desc = "Likes music and has a ton of canned food.<br/><br/>- Gender: Female<br/>- Height: 150cm<br/>- Weight: 40kg<br/>- Hair_color: blonde<br/>- Eye_color: blue";
let roko_main_desc = "She's cuddly with Nina and its really awesome.<br/><br/>- Gender: Female <br/>- Height: 140cm <br/>- Weight: 35kg <br/>- Hair_color: violet <br/>- Eye_color: violet";
let nina_main_desc = "Shes like big sister to roko. Shes also a lil bit shy.<br/><br/>- Gender: Female <br/>- Height: 170cm <br/>- Weight: 55kg <br/>- Hair_color: light brown <br/>- Eye_color: brown";

//loading basics
const title = document.getElementById("title_text");
const description = document.getElementById("description_text");
const main_image = document.getElementById("image_main");
const main_image0 = document.getElementById("image_main0");
const main_images = document.getElementById("main_images");

const logo = document.getElementById("logo");

// loading character buttons
const inu = document.getElementById("Ino");
const roko = document.getElementById("Roko");
const hayu = document.getElementById("Hayu");
const nina = document.getElementById("Nina");
const hemo = document.getElementById("Hemo");
const hoho = document.getElementById("Hoho");


function reset() {
    main_image0.style.visibility = "hidden";
    main_images.style.paddingLeft = "0%";
    main_images.style.borderStyle = "hidden";
}


function loadMainPage() {
    reset();

    title.innerHTML = "Introduction";
    description.innerHTML = main_desc;
    main_image.src = "./assets/images/general/general_image.png";
}


function InoSakura() {
    reset();

    title.innerHTML = "Ino Sakura";
    description.innerHTML = ino_main_desc;
    main_image.src = "assets/images/InoSakura/ino_main.png";
}


function RokoSekino() {
    reset();    

    main_images.style.paddingLeft = "10%";
    main_images.style.borderStyle = "solid";
    title.innerHTML = "Roko Sekino";
    description.innerHTML = roko_main_desc;
    main_image.src = "assets/images/RokoSekino/roko_main.jpg";
    main_image0.src = "assets/images/RokoSekino/roko_second.jpg";
    main_image0.style.visibility = "visible";
}


function HayuNukui() {
    reset();

    main_images.style.paddingLeft = "10%";
    main_images.style.borderStyle = "solid";
    title.innerHTML = "Hayu Nukui";
    description.innerHTML = hayu_main_desc;
    main_image.src = "assets/images/HayuNukui/hayu_main.jpg";
    main_image0.src = "assets/images/HayuNukui/hayu_second.jpg";
    main_image0.style.visibility = "visible";
}


function NinaMaehara() {
    reset();

    title.innerHTML = "Nina Maehara";
    description.innerHTML = nina_main_desc;
    main_image.src = "assets/images/NinaMaehara/nina_main.jpg";
}


function HemoMidori() {
    reset();

    title.innerHTML = "Hemo Midori";
    description.innerHTML = hemo_main_desc;
    main_image.src = "assets/images/HemoMidori/hemo_main.jpg";
}


function HohoKajino() {
    reset();

    title.innerHTML = "Hoho Kajino";
    description.innerHTML = hoho_main_desc;
    main_image.src = "assets/images/HohoKajino/hoho_main.jpg";
}


loadMainPage();
logo.addEventListener("click", loadMainPage);
inu.addEventListener("click", InoSakura);
roko.addEventListener("click", RokoSekino);
hayu.addEventListener("click", HayuNukui);
nina.addEventListener("click", NinaMaehara);
hemo.addEventListener("click", HemoMidori);
hoho.addEventListener("click", HohoKajino);

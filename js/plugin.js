let colorstorage = localStorage.getItem("color-option");

if (colorstorage !== null) {

    document.documentElement.style.setProperty("--main-color", colorstorage);

    document.querySelectorAll(".ul-setting li").forEach(element => {

        element.classList.remove("active");

        if (element.dataset.color === colorstorage) {

            element.classList.add("active");

        }
    });

}

// start change background

let myimg = ["img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
];
let mylanding = document.querySelector(".landing-page");
setInterval(function() {
    var myrandom = Math.floor(Math.random() * myimg.length);
    mylanding.style.backgroundImage = 'url("img/' + myimg[myrandom] + '")';
}, 5000);

// end change background

//start setting box

document.querySelector(".setting-box .setting").onclick = function() {

    document.querySelector(".setting-box").classList.toggle("open");

}

//end setting box

// start change color

let colors = document.querySelectorAll(".ul-setting li");

colors.forEach(li => {


    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        localStorage.setItem("color-option", e.target.dataset.color);

        li.parentElement.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

    });

});


// end change color



// start skills 


let skills = document.querySelector(".skills");


window.onscroll = function() {

    let skilltop = skills.offsetTop;

    if (document.documentElement.scrollTop > skilltop) {

        let allskills = document.querySelectorAll(".skills-box .skills-progress span");

        allskills.forEach(el => {

            el.style.width = el.dataset.progress;

        });

    }

}

// end skills

// start gallery 

let ourgallery = document.querySelectorAll(".gallery .images-box img");

ourgallery.forEach(img => {

    img.addEventListener("click", (e) => {

        let overlay = document.createElement("div");
        overlay.className = "overlay-img"
        document.body.appendChild(overlay);

        let popup = document.createElement("div");
        popup.className = "pop-up";
        document.body.appendChild(popup);

        let popupbox = document.createElement("div");
        popupbox.className = "pop-up-box";
        popup.appendChild(popupbox);

        let spanclose = document.createElement("span");
        let close = document.createTextNode("X");
        spanclose.appendChild(close);
        popupbox.appendChild(spanclose);

        let nameimg = document.createElement("h3");
        let textname = document.createTextNode(img.alt);
        nameimg.appendChild(textname);
        popupbox.appendChild(nameimg);

        let theimg = document.createElement("img");
        theimg.src = e.target.src;
        popupbox.appendChild(theimg);

        

        spanclose.addEventListener("click", () => {

            overlay.remove();
            popup.remove();

        });
    });

});


// end gallery


// start move between pages 

const navbullets = document.querySelectorAll(".navigation .nav-bullet");
const links = document.querySelectorAll(".heading-area .ul-head li ");


function tosomewhere(all) {

    all.forEach(el => {

        el.addEventListener("click", (e) => {
            document.querySelector(e.target.dataset.nav).scrollIntoView({
                behavior: "smooth",
            });

        });

    });

}

tosomewhere(navbullets);
tosomewhere(links);

// end move between pages


// start change bullets 


let allbullet = document.querySelectorAll(".setting-box  .change-bullet div");

let bulletlocalitem = localStorage.getItem("bullet-option");

if (bulletlocalitem !== null) {

    allbullet.forEach(div => {

        div.classList.remove("active");

    });

    if (bulletlocalitem === "block") {

        document.querySelector(".navigation").style.display = "block";
        document.querySelector(".setting-box  .change-bullet .yes").classList.add("active");
    }

    if (bulletlocalitem === "none") {

        document.querySelector(".navigation").style.display = "none";
        document.querySelector(".setting-box  .change-bullet .no").classList.add("active");


    }

}

allbullet.forEach(bullet => {

    bullet.addEventListener("click", (e) => {

        if (e.target.classList.contains("yes")) {

            document.querySelector(".navigation").style.display = "block";
            localStorage.setItem("bullet-option", "block");

        } else {
            document.querySelector(".navigation").style.display = "none";
            localStorage.setItem("bullet-option", "none");

        }

        bullet.parentElement.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

    });
});



// end change bullets

// start reset option 

document.querySelector(".setting-box .box .reset-option").onclick = function() {

    localStorage.clear();
    location.reload();

}

// end reset option
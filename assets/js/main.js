function right(i) {
    var linkBox = document.getElementsByClassName("section-first-link");
    if (i < 6 && i != 1) {
        linkBox.item(i - 2).style.display = "none";
        linkBox.item(i - 1).style.display = "block";
        document.getElementById("section-first").style.backgroundImage = `url('/assets/img/menu_${i}.png')`;
    } else if (i == 1) {
        linkBox.item(4).style.display = "none";
        linkBox.item(i - 1).style.display = "block";
        document.getElementById("section-first").style.backgroundImage = `url('/assets/img/menu_${i}.png')`;
    }
    if (i % 2 == 0) {
        document.getElementById("logo").src = "/assets/img/logo_dunkel.png";
        document.getElementById("contact-link").style.color = "#000";
        for (let j = 0; j < 5; j++) {
            document.getElementsByClassName("hover")[j].style.color = "#000";
        }

    } else {
        document.getElementById("logo").src = "/assets/img/logo_hell.png";
        document.getElementById("contact-link").style.color = "#fafafa";
        for (let j = 0; j < 5; j++) {
            document.getElementsByClassName("hover")[j].style.color = "#fafafa";
        }
    }
}
function left(i) {
    var linkBox = document.getElementsByClassName("section-first-link");
    if (i > 0 && i != 5) {
        linkBox.item(i).style.display = "none";
        linkBox.item(i - 1).style.display = "block";
        document.getElementById("section-first").style.backgroundImage = `url('/assets/img/menu_${i}.png')`;
    } else if (i == 5) {
        linkBox.item(0).style.display = "none";
        linkBox.item(4).style.display = "block";
        document.getElementById("section-first").style.backgroundImage = `url('/assets/img/menu_${i}.png')`;
    }
    if (i % 2 == 0) {
        document.getElementById("logo").src = "/assets/img/logo_dunkel.png";
        document.getElementById("contact-link").style.color = "#000";
        for (let j = 0; j < 5; j++) {
            document.getElementsByClassName("hover")[j].style.color = "#000";
        }
    } else {
        document.getElementById("logo").src = "/assets/img/logo_hell.png";
        document.getElementById("contact-link").style.color = "#fafafa";
        for (let j = 0; j < 5; j++) {
            document.getElementsByClassName("hover")[j].style.color = "#fafafa";
        }
    }
}
function grid(i) {
    var linkBox = document.getElementsByClassName("section-first-link");
    if (i == 0) {
        linkBox.item(i).style.display = "none";
        document.getElementById("section-first").style.backgroundImage = "url('')";
        document.getElementById("grid").style.display = "grid";
        document.getElementById("section-scroll").style.display = "none";
        document.getElementById("lable-tag").style.display = "none";
        document.getElementById("logo").src = "/assets/img/logo_astrein.svg";
        document.getElementById("contact-link").style.color = "#000";
        for (let j = 0; j < 5; j++) {
            document.getElementsByClassName("hover")[j].style.color = "#000";
        }
    }
}



// ------------------------------ CODE VON JASCHA ------------------------------
function rightOfSectionThree(i) {
    var linkBoxOfSectionThree = document.getElementsByClassName("section-three-link");
    if (i < 6 && i != 1) {
        linkBoxOfSectionThree.item(i - 2).style.display = "none";
        linkBoxOfSectionThree.item(i - 1).style.display = "block";
        document.getElementById("ClassOfPictureSliderPicture").style.backgroundImage = `url('/assets/img/produkt${i}.png')`;
    }
    else if (i == 1) {
        linkBoxOfSectionThree.item(4).style.display = "none";
        linkBoxOfSectionThree.item(i - 1).style.display = "block";
        document.getElementById("ClassOfPictureSliderPicture").style.backgroundImage = `url('/assets/img/produkt${i}.png')`;
    }
}

function leftOfSectionThree(i) {
    var linkBoxOfSectionThree = document.getElementsByClassName("section-three-link");
    if (i > 0 && i != 5) {
        linkBoxOfSectionThree.item(i).style.display = "none";
        linkBoxOfSectionThree.item(i - 1).style.display = "block";
        document.getElementById("ClassOfPictureSliderPicture").style.backgroundImage = `url('/assets/img/produkt${i}.png')`;
    } else if (i == 5) {
        linkBoxOfSectionThree.item(0).style.display = "none";
        linkBoxOfSectionThree.item(4).style.display = "block";
        document.getElementById("ClassOfPictureSliderPicture").style.backgroundImage = `url('/assets/img/produkt${i}.png')`;
    }
}

// ------------------------------ CODE VON JASCHA ------------------------------

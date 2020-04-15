var curent = 1;
function right(i) {
    console.log(i)
    var linkBox = document.getElementsByClassName("section-first-link");
    console.log(linkBox.item(i - 1))
    linkBox.item(i - 2).style.display = "none";
    linkBox.item(i - 1).style.display = "block";
    document.getElementById("index-section-first").style.backgroundImage = "url('/assets/img/menu_2.png')";

    //document.getElementById("index-section-first").style.backgroundImage = "url('../img/menu_2.png')";
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
function grid(i) {
    var linkBox = document.getElementsByClassName("section-first-link");
    if (i == 0) {
        document.getElementById("mySidenav").style.width = `${i}`;
        document.getElementById("nav").style.display = "none";
        document.getElementById("openbtn").style.color = "#232323"
        linkBox.item(i).style.display = "none";
        document.getElementById("grid-show").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("section-first").style.backgroundImage = "url('')";
        document.getElementById("grid").style.display = "grid";
        document.getElementById("section-scroll").style.display = "none";
        document.getElementById("lable-tag").style.display = "none";
        document.getElementById("logo").src = "/assets/img/logo_astrein.svg";
        for (let j = 0; j < 3; j++) {
            document.getElementsByClassName("hover")[j].style.color = "#232323";
        }
    }
}

function rightOfSectionThree(i) {
    var linkBoxOfSectionThree = document.getElementsByClassName("section-three-link");
    if (i == 1) {
        linkBoxOfSectionThree.item(2).style.display = "none";
        linkBoxOfSectionThree.item(0).style.display = "block";
    } else if (i == 2) {
        linkBoxOfSectionThree.item(0).style.display = "none";
        linkBoxOfSectionThree.item(1).style.display = "block";
    } else {
        linkBoxOfSectionThree.item(1).style.display = "none";
        linkBoxOfSectionThree.item(2).style.display = "block";
    }
}

function leftOfSectionThree(i) {
    var linkBoxOfSectionThree = document.getElementsByClassName("section-three-link");
    if (i > 0 && i != 3) {
        linkBoxOfSectionThree.item(i).style.display = "none";
        linkBoxOfSectionThree.item(i - 1).style.display = "block";
    } else if (i == 3) {
        linkBoxOfSectionThree.item(0).style.display = "none";
        linkBoxOfSectionThree.item(2).style.display = "block";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("section-scroll").style.display = "none";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("section-scroll").style.display = "block";
}

function ButtonToShowKontakt() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("index-NoVisibleContactSection").style.left = "0";
}
function ButtonToGoBackFromContact() {
    document.getElementById("index-NoVisibleContactSection").style.left = "100%";
}

// function ButtonToShowKontakt() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("index-NoVisibleContactSection").style.display = "block";
//     document.getElementById("ALLHTML").style.display = "none";
// }
// function ButtonToGoBackFromContact() {
//     document.getElementById("ALLHTML").style.display = "block";
//     document.getElementById("index-NoVisibleContactSection").style.display = "none";
// }
















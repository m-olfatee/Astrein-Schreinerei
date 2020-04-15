function right(i) {
    var linkBox = document.getElementsByClassName("section-first-link");
    if (i < 6 && i != 1) {
        linkBox.item(i - 2).style.display = "none";
        linkBox.item(i - 1).style.display = "block";
        document.getElementById("index-section-first").style.backgroundImage = `url('/assets/img/menu_${i}.png')`;
    } else if (i == 1) {
        linkBox.item(4).style.display = "none";
        linkBox.item(i - 1).style.display = "block";
        document.getElementById("index-section-first").style.backgroundImage = `url('/assets/img/menu_${i}.png')`;
    }
    if (i % 2 == 0) {
        document.getElementById("logo").src = "/assets/img/logo_dunkel.png";
        document.getElementById("contact-link").style.color = "#000"
    } else {
        document.getElementById("logo").src = "/assets/img/logo_hell.png";
        document.getElementById("contact-link").style.color = "#fafafa"
    }
}
function left(i) {
    var linkBox = document.getElementsByClassName("section-first-link");
    if (i > 0 && i != 5) {
        linkBox.item(i).style.display = "none";
        linkBox.item(i - 1).style.display = "block";
        document.getElementById("index-section-first").style.backgroundImage = `url('/assets/img/menu_${i}.png')`;
    } else if (i == 5) {
        linkBox.item(0).style.display = "none";
        linkBox.item(4).style.display = "block";
        document.getElementById("index-section-first").style.backgroundImage = `url('/assets/img/menu_${i}.png')`;
    }
}
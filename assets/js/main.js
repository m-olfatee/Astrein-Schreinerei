var curent = 1;
function right(i) {
    console.log(i)
    var linkBox = document.getElementsByClassName("section-first-link");
    console.log(linkBox.item(i - 1))
    linkBox.item(i - 2).style.display = "none";
    linkBox.item(i - 1).style.display = "block";
    alert(document.getElementById("index-section-first").style.backgroundImage);
    document.getElementById("index-section-first").style.backgroundImage = "url('../img/menu2.png')";

    //document.getElementById("index-section-first").style.backgroundImage = "url('../img/menu_2.png')";
}

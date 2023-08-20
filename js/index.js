var pcModal = document.getElementById("PcDropdown");
var playstationModal = document.getElementById("playstationDropdown");
var xboxModal = document.getElementById("xboxDropdown");
var nintendoModal = document.getElementById("nintendoDropdown");

var pc = document.getElementById("pc");
var pcText = document.getElementById("pcText");
var pcAngleDown = document.getElementById("pcAngleDown");
var pcAngleUp = document.getElementById("pcAngleUp");

var playstation = document.getElementById("playstation");
var playstationText = document.getElementById("playstationText");
var playstationAngleDown = document.getElementById("playstationAngleDown");
var playstationAngleUp = document.getElementById("playstationAngleUp");

var xbox = document.getElementById("xbox");
var xboxText = document.getElementById("xboxText");
var xboxAngleDown = document.getElementById("xboxAngleDown");
var xboxAngleUp = document.getElementById("xboxAngleUp");

var nintendo = document.getElementById("nintendo");
var nintendoText = document.getElementById("nintendoText");
var nintendoAngleDown = document.getElementById("nintendoAngleDown");
var nintendoAngleUp = document.getElementById("nintendoAngleUp");

var searchIcon = document.getElementById("search_icon");
var mainNav = document.getElementById("main_nav");
var searchBar = document.getElementById("searchbar");
var close = document.getElementById("close");


searchIcon.onclick = function () {
    mainNav.style.display = "none"
    searchBar.style.display = 'flex'
}
close.onclick = function () {
    mainNav.style.display = "block"
    searchBar.style.display = 'none'
}

pc.onclick = function () {
    if (pcModal.style.display === "none" || pcModal.style.display === '') {
        pcModal.style.display = "block";
        pcText.style.fontWeight = "bold"
        pcAngleDown.style.display = "none"
        pcAngleUp.style.display = "block"
    } else {
        pcModal.style.display = "none";
        pcText.style.fontWeight = "normal"
        pcAngleDown.style.display = "block"
        pcAngleUp.style.display = "none"
    }

    playstationModal.style.display = "none";
    playstationText.style.fontWeight = "normal"
    playstationAngleDown.style.display = "block"
    playstationAngleUp.style.display = "none"

    xboxModal.style.display = "none";
    xboxText.style.fontWeight = "normal"
    xboxAngleDown.style.display = "block"
    xboxAngleUp.style.display = "none"

    nintendoModal.style.display = "none";
    nintendoText.style.fontWeight = "normal"
    nintendoAngleDown.style.display = "block"
    nintendoAngleUp.style.display = "none"
}

playstation.onclick = function () {

    if (playstationModal.style.display === "none" || playstationModal.style.display === '') {
        playstationModal.style.display = "block";
        playstationText.style.fontWeight = "bold"
        playstationAngleDown.style.display = "none"
        playstationAngleUp.style.display = "block"
    } else {
        playstationModal.style.display = "none";
        playstationText.style.fontWeight = "normal"
        playstationAngleDown.style.display = "block"
        playstationAngleUp.style.display = "none"
    }


    pcModal.style.display = "none";
    pcText.style.fontWeight = "normal"
    pcAngleDown.style.display = "block"
    pcAngleUp.style.display = "none"

    xboxModal.style.display = "none";
    xboxText.style.fontWeight = "normal"
    xboxAngleDown.style.display = "block"
    xboxAngleUp.style.display = "none"

    nintendoModal.style.display = "none";
    nintendoText.style.fontWeight = "normal"
    nintendoAngleDown.style.display = "block"
    nintendoAngleUp.style.display = "none"
}

xbox.onclick = function () {
    if (xboxModal.style.display === "none" || xboxModal.style.display === '') {
        xboxModal.style.display = "block";
        xboxText.style.fontWeight = "bold"
        xboxAngleDown.style.display = "none"
        xboxAngleUp.style.display = "block"
    } else {
        xboxModal.style.display = "none";
        xboxText.style.fontWeight = "normal"
        xboxAngleDown.style.display = "block"
        xboxAngleUp.style.display = "none"
    }

    pcModal.style.display = "none";
    pcText.style.fontWeight = "normal"
    pcAngleDown.style.display = "block"
    pcAngleUp.style.display = "none"

    playstationModal.style.display = "none";
    playstationText.style.fontWeight = "normal"
    playstationAngleDown.style.display = "block"
    playstationAngleUp.style.display = "none"

    nintendoModal.style.display = "none";
    nintendoText.style.fontWeight = "normal"
    nintendoAngleDown.style.display = "block"
    nintendoAngleUp.style.display = "none"
}

nintendo.onclick = function () {
    if (nintendoModal.style.display === "none" || nintendoModal.style.display === '') {
        nintendoModal.style.display = "block";
        nintendoText.style.fontWeight = "bold"
        nintendoAngleDown.style.display = "none"
        nintendoAngleUp.style.display = "block"
    } else {
        nintendoModal.style.display = "none";
        nintendoText.style.fontWeight = "normal"
        nintendoAngleDown.style.display = "block"
        nintendoAngleUp.style.display = "none"
    }

    pcModal.style.display = "none";
    pcText.style.fontWeight = "normal"
    pcAngleDown.style.display = "block"
    pcAngleUp.style.display = "none"

    playstationModal.style.display = "none";
    playstationText.style.fontWeight = "normal"
    playstationAngleDown.style.display = "block"
    playstationAngleUp.style.display = "none"

    xboxModal.style.display = "none";
    xboxText.style.fontWeight = "normal"
    xboxAngleDown.style.display = "block"
    xboxAngleUp.style.display = "none"
}

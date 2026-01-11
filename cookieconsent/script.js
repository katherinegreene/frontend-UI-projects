const banner = document.getElementById("cookie-banner");
const accept = document.getElementById("accept");
const decline = document.getElementById("decline");

const consent = localStorage.getItem("cookieconsent");
if (consent == null) {
    banner.style.display = "block";// if user didn't click accept or decline previously show the banner
}

Element.addEventListener("click", function () {
    localStorage.setItem("cookieconsent", "accepted")//Stores the word ‘accepted’ in the browser, under the name ‘cookieConsent’.
    banner.style.display = "none";

})

Element.addEventListener("click", function () {
    localStorage.setItem("cookieconsent", "declined")
    banner.style.display = "none";

})
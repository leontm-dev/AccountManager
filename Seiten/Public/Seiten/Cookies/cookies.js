window.onload = () => {
    if (localStorage.getItem("accountmanager-cookies") == "true") {
        document.getElementById("cookies-popup").classList.add("hide");
    } else {
        document.getElementById("cookies-popup").classList.remove("hide");
    }
};
function cookiesAccept() {
    localStorage.setItem("accountmanager-cookies", "true");
    document.getElementById("cookies-popup").classList.add("hide");
};
function cookiesDecline() {
    localStorage.setItem("accountmanager-cookies", "false");
    document.getElementById("cookies-popup").classList.add("hide");
};
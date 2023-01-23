
let website = {
    glitchedText : document.getElementsByClassName('noGlitch'),
    link : document.getElementById('link')
}
document.getElementById("home").onclick = function () {
    location.href = "index.html";
};
document.getElementById("about").onclick = function () {
    location.href = "about.html";
};
document.getElementById("projects").onclick = function () {
    location.href = "projects.html";
};
document.getElementById("contact").onclick = function () {
    location.href = "contact.html";
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

website.glitchText()
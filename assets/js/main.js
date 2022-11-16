var MODALTITLE = document.getElementById("projectModalTitle");
var MODALBODY = document.getElementById("modalBody");
function openModal(title, imgsrc, imgalt) {
    if (MODALTITLE) {
        MODALTITLE.textContent = title;
    }
    if (MODALBODY) {
        MODALBODY.innerHTML = "<img src=\"/assets/images/" + imgsrc + ".jpg\" alt=\"" + imgalt + "\"/>";
    }
}

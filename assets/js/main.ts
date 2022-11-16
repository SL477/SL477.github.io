const MODALTITLE : HTMLElement | null = document.getElementById("projectModalTitle");
const MODALBODY : HTMLElement | null = document.getElementById("modalBody");

function openModal(title: string, imgsrc: string, imgalt: string) : void {
    if (MODALTITLE) {
        MODALTITLE.textContent = title;
    }
    if (MODALBODY) {
        MODALBODY.innerHTML = `<img src="/assets/images/${imgsrc}.jpg" alt="${imgalt}"/>`;
    }
}
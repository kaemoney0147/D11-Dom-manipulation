function changeH1text() {
    let newText = document.querySelector('h1');
    newText.innerText = 'Dynamic Laptop Store ';

}
function bodyColor() {
    document.body.style.backgroundColor = 'coral';
}
function changeAddress(change) {
    let addressChaneg = document.querySelector('footer>p');
    addressChaneg.innerHTML = change;
}
function addClassToAmazonLink() {
    for (let node of document.querySelectorAll("a")) {
        node.classList.add("amazon");
    }
}
function toggleImages() {
    for (let image of document.querySelectorAll("img")) {
        image.classList.toggle("hidepics");
    }
}
function setRandomColor() {
    const color = getRandomColor();
    for (let price of document.querySelectorAll("tr > td:nth-child(4)")) {
        price.style.color = color;
    }
}

function getRandomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

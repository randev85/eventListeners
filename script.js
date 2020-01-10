let numberOne = document.getElementById('number-one');
let numberTwo = document.getElementById('number-two');
let addSum = document.getElementById('add-numbers');

numberOne.addEventListener('input', add);
numberTwo.addEventListener('input', add);

function add() {
    let one = parseFloat(numberOne.value) || 0;
    let two = parseFloat(numberTwo.value) || 0;
    addSum.innerHTML = "Your sum equals " + (one+two);
}
let simon = document.getElementById('simon');
let bruce = document.getElementById('bruce');
let ben = document.getElementById('ben');

simon.addEventListener('click', picLink)
bruce.addEventListener('click', picLink)
ben.addEventListener('click', picLink)

function picLink() {
    let allImages = document.querySelectorAll("img");

    for (let i = 0; i< allImages.length; i++) {
        allImages[i].className = "hide";
    }

    let picId = this.attributes["data-img"].value;
    let pic = document.getElementById(picId);
    if (pic.className === "hide"){
        pic.className = "";
    } else {
        pic.className = "hide";
    }
}


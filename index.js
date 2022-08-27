const body = document.getElementById("body");
const input = document.getElementById("input");




input.addEventListener("input", () => {
    const color = input.value;
    body.style.backgroundColor = color;
});
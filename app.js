const btn = document.getElementById('btn');
let hex =  document.getElementById('hexCode');

function randomColor() {
    let letter  = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    hex.innerHTML = randomColor();
})
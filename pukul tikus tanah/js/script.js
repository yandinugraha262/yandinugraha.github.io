const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');


let tanahSebelumnya;
let selesai = false;

function randomTanah(tanah) {
    const ts = Match.floor(Math.random () * tanah.length);
    const tRandom = tanah[t];
    lf (tRandom == tanahSebelumnya)
        randomTanah(tanah);
    
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min) 
}

function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1500);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanTikus();
        }
    },wRandom);
}

function mulai() {
    munculkanTikus();
    setTimeout(() => {
selesai = true
    }, 3000);
} 
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Configurações do Jogador
let player = {
    x: 50,
    y: 50,
    size: 30,
    color: '#00ffcc',
    speed: 5
};

function update() {
    // Aqui você vai adicionar a lógica de colisão no futuro
}

function draw() {
    // Limpa a tela a cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha o jogador (um quadrado por enquanto, depois vira seu design!)
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Captura as teclas
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') player.y -= player.speed;
    if (e.key === 'ArrowDown') player.y += player.speed;
    if (e.key === 'ArrowLeft') player.x -= player.speed;
    if (e.key === 'ArrowRight') player.x += player.speed;
});

// Loop do jogo
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
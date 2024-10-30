let tempo = 0; 
let cronometroAtivo = false; 
let intervalo; // Para armazenar a referência do setInterval

const cronometroElement = document.getElementById('numeros');

document.getElementById('lig').addEventListener('click', function() {
    if (!cronometroAtivo) {
        cronometroAtivo = true;
        intervalo = setInterval(function() {
            tempo += 100; // Aumenta o tempo a cada 100 milissegundos
            const horas = Math.floor((tempo / 3600000) % 60);
            const minutos = Math.floor((tempo / 60000) % 60);
            const segundos = Math.floor((tempo / 1000) % 60);
            const centesimos = Math.floor((tempo % 1000) / 100);
            cronometroElement.innerHTML = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}.${String(centesimos).padStart(1, '0')}`;
        }, 100);
        
        
        cronometroElement.classList.add('numeros');
    }
});

document.getElementById('des').addEventListener('click', function() {
    if (cronometroAtivo) {
        cronometroAtivo = false;
        clearInterval(intervalo);
    }
});

document.getElementById('res').addEventListener('click', function() {
    cronometroAtivo = false;
    clearInterval(intervalo);
    tempo = 0; // Reinicia o tempo
    cronometroElement.innerHTML = `00:00:00.0`; // Reinicia a exibição
    cronometroElement.classList.remove('numeros'); 
});

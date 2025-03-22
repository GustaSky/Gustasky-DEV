function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = '5521994231789';

    const texto = `Ola, me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;


    window.open(url, '_blank');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const fotoOverlay = document.querySelector('.foto-overlay');

    sidebar.classList.toggle('active');

   
    if (sidebar.classList.contains('active')) {
        fotoOverlay.classList.add('hidden');
    } else {
        fotoOverlay.classList.remove('hidden');
    }
}


document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

document.querySelectorAll('.projetos-caixa-item').forEach(item => {
    item.addEventListener('click', (event) => {
        
        if (event.target.tagName === 'A') {
            return;
        }
       
    });
});
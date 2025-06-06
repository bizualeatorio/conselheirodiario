// Objeto contendo os conselhos para cada categoria
const adviceData = {
    relacionamento: [
        "Comunique os seus sentimentos abertamente e com honestidade. A verdade fortalece os laços.",
        "Dedique tempo de qualidade às pessoas que ama. Não é sobre quantidade, mas sobre presença genuína.",
        "Pratique a empatia: tente ver as coisas da perspectiva do outro antes de reagir.",
        "Lembre-se que pequenos gestos de carinho diários constroem relacionamentos duradouros.",
        "Seja um ouvinte ativo. Às vezes, o silêncio compreensivo vale mais que mil conselhos.",
        "O perdão é um presente que você dá a si mesmo. Liberte-se do peso do ressentimento.",
        "Expresse gratidão pelas pessoas em sua vida. Reconhecimento fortalece conexões.",
        "Estabeleça limites saudáveis. Amor não significa ausência de respeito próprio.",
        "Celebre as conquistas dos seus parceiros como se fossem suas próprias.",
        "A vulnerabilidade é coragem disfarçada. Permita-se ser verdadeiro."
    ],
    trabalho: [
        "Defina 3 prioridades para seu dia. Foco traz produtividade real.",
        "Invista 30 minutos diários aprendendo algo novo na sua área. Conhecimento é capital.",
        "Revise seu orçamento com sabedoria. Pequenos ajustes hoje criam grandes liberdades amanhã.",
        "Celebre cada vitória, por menor que seja. Reconhecer progresso mantém a motivação.",
        "Conecte-se com alguém que admira. Networking genuíno abre portas invisíveis.",
        "Feedback é presente. Busque críticas construtivas para crescer profissionalmente.",
        "Organize seu ambiente de trabalho. Ordem externa reflete clareza mental.",
        "Invista em você mesmo. O melhor ROI vem do autoaperfeiçoamento contínuo.",
        "Pense em 'valor' antes de gastar. Consumo consciente constrói riqueza sustentável.",
        "Seja protagonista da sua carreira. Oportunidades são criadas, não esperadas."
    ],
    saude: [
        "Hidrate-se como se sua vida dependesse disso - porque depende. Água é vida.",
        "Movimente-se a cada hora. Seu corpo foi feito para ação, não para sedentarismo.",
        "Experimente um novo alimento saudável hoje. Variedade nutre corpo e alma.",
        "Priorize o sono como priorizaria o ar que respira. Descanso é reparação celular.",
        "Exercite-se com prazer, não com dor. Encontre movimentos que ama e repita-os.",
        "Medite por 10 minutos. Silêncio interno é o antídoto para o caos moderno.",
        "Desconecte para se reconectar. A vida real acontece além das telas.",
        "Encha metade do prato com cores da natureza. Alimentos vibrantes nutrem profundamente.",
        "Agende seus check-ups. Prevenção é o melhor remédio que existe.",
        "Sorria de verdade. Alegria genuína fortalece o sistema imunológico."
    ],
    pessoal: [
        "Reserve um tempo sagrado para fazer algo que acende sua alma. Você merece.",
        "Leia páginas que inspiram. Livros são conversas com as melhores mentes da história.",
        "Anote 3 coisas boas do seu dia. Gratidão transforma a percepção da realidade.",
        "Caminhe na natureza. Observar a vida silvestre reconecta com seu ritmo natural.",
        "Ligue para alguém especial só para dizer 'pensei em você hoje'.",
        "Organize um pequeno espaço. Ordem física cria espaço mental para novas ideias.",
        "Dê um pequeno passo fora da zona de conforto. Crescimento começa onde o medo termina.",
        "Reavalie seus objetivos. A direção é mais importante que a velocidade.",
        "Permita-se descansar sem culpa. O ócio criativo é berço da inovação.",
        "Fale consigo mesmo como falaria com seu melhor amigo. Autocompaixão é revolucionária."
    ]
};

// Seleciona elementos
const adviceDisplay = document.getElementById('adviceDisplay');
const categoryButtons = document.querySelectorAll('.category-button');
const shareBtn = document.getElementById('shareBtn');

// Adiciona um ouvinte de evento para cada botão
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        
        // Animação do botão clicado
        button.classList.add('animate__pulse');
        setTimeout(() => button.classList.remove('animate__pulse'), 1000);
        
        if (adviceData[category]) {
            // Animação de transição
            adviceDisplay.classList.add('animate__fadeOut');
            
            setTimeout(() => {
                const advices = adviceData[category];
                const randomIndex = Math.floor(Math.random() * advices.length);
                const randomAdvice = advices[randomIndex];
                
                adviceDisplay.innerHTML = `
                    <div class="text-center">
                        <i class="fas fa-quote-left text-yellow-400 mb-4 text-2xl"></i>
                        <p>${randomAdvice}</p>
                        <i class="fas fa-quote-right text-yellow-400 mt-4 text-2xl"></i>
                    </div>
                `;
                
                adviceDisplay.classList.remove('animate__fadeOut');
                adviceDisplay.classList.add('animate__fadeIn', 'floating');
                
                // Mostra o botão de compartilhar
                shareBtn.classList.remove('hidden');
                
                // Cria efeito de confete
                createConfetti();
                
            }, 500);
        } else {
            adviceDisplay.textContent = "Selecione uma categoria válida.";
        }
    });
});

// Função para criar confetes
function createConfetti() {
    const colors = ['#F59E0B', '#7E22CE', '#EC4899', '#3B82F6', '#10B981'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.opacity = Math.random() + 0.5;
        
        document.body.appendChild(confetti);
        
        const animationDuration = Math.random() * 3 + 2;
        
        confetti.animate([
            { transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: animationDuration * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
            fill: 'forwards'
        });
        
        setTimeout(() => confetti.remove(), animationDuration * 1000);
    }
}

// Botão de compartilhar
shareBtn.addEventListener('click', () => {
    const adviceText = adviceDisplay.querySelector('p')?.textContent || "Receba conselhos diários inspiradores!";
    
    if (navigator.share) {
        navigator.share({
            title: 'Meu Conselho Diário',
            text: adviceText,
            url: window.location.href
        }).catch(err => {
            console.log('Erro ao compartilhar:', err);
            copyToClipboard(adviceText);
        });
    } else {
        copyToClipboard(adviceText);
    }
});

// Função para copiar para área de transferência
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // Feedback visual
    const originalText = shareBtn.innerHTML;
    shareBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
    setTimeout(() => {
        shareBtn.innerHTML = originalText;
    }, 2000);
}
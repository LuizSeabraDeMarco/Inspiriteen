document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar AOS com configurações de impacto
    AOS.init({
        duration: 1200,
        once: true,
        offset: 100,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    });

    // 2. Dados das ONGs (Design de Impacto)
    const ongs = [
        {
            name: "Instituto Semente Viva",
            desc: "Hackeando a fome urbana através de hortas inteligentes e monitoramento de dados.",
            tag: "Environment",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Educação Para Todos",
            desc: "Construindo a ponte digital para o conhecimento em comunidades sem acesso.",
            tag: "Education",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Patinhas de Ouro",
            desc: "Marketplace de adoção com IA para encontrar o match perfeito para animais resgatados.",
            tag: "Animal Welfare",
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Saúde Solidária",
            desc: "Sistema de telemedicina simplificado para conectar médicos a quem mais precisa.",
            tag: "Health Tech",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
        }
    ];

    const ongsContainer = document.getElementById('ongs-container-v5');

    if (ongsContainer) {
        ongs.forEach((ong, index) => {
            const card = document.createElement('div');
            card.className = 'ong-card-v5';
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (index * 100).toString());

            card.innerHTML = `
                <div class="ong-img-v5" style="background-image: url('${ong.image}')">
                    <div class="ong-overlay-v5"></div>
                </div>
                <div class="ong-body-v5">
                    <span class="bento-tag">${ong.tag}</span>
                    <h3>${ong.name}</h3>
                    <p>${ong.desc}</p>
                    <a href="#" class="btn-v5-outline">Ver Repositório</a>
                </div>
            `;
            ongsContainer.appendChild(card);
        });
    }

    // 3. Scroll Suave Premium
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Efeito de Mouse na Navbar (Glow dinâmico)
    const navbar = document.querySelector('.navbar-v5');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 0';
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.padding = '25px 0';
            navbar.style.borderBottomColor = 'transparent';
        }
    });

    // 5. Menu Mobile Simples e Funcional
    const mobileToggle = document.querySelector('.mobile-toggle-v5');
    const navActions = document.querySelector('.nav-actions');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navActions.style.display = navActions.style.display === 'flex' ? 'none' : 'flex';
            if (navActions.style.display === 'flex') {
                navActions.style.flexDirection = 'column';
                navActions.style.position = 'absolute';
                navActions.style.top = '80px';
                navActions.style.left = '0';
                navActions.style.width = '100%';
                navActions.style.background = 'rgba(10, 10, 12, 0.95)';
                navActions.style.padding = '40px';
                navActions.style.textAlign = 'center';
                navActions.style.gap = '25px';
            }
        });
    }
});

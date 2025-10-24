// Arquivo perfil.js

document.addEventListener('DOMContentLoaded', function() {
    loadProfileData();
    renderHighlights();
    renderPosts();
    setupModalListeners();
    
});

// 1. Carregar Dados do Perfil
function loadProfileData() {
    document.getElementById('profile-pic').src = PROFILE_DATA.profilePic;
    document.getElementById('modal-profile-pic').src = PROFILE_DATA.profilePic;
    document.getElementById('profile-username').textContent = PROFILE_DATA.username;
    document.getElementById('modal-username').textContent = PROFILE_DATA.username;
    
    // Estatísticas
    document.querySelector('#stats-posts span').textContent = PROFILE_DATA.postsCount;
    document.querySelector('#stats-followers span').textContent = PROFILE_DATA.followersCount;
    document.querySelector('#stats-following span').textContent = PROFILE_DATA.followingCount;

    // Biografia
    const bioLines = PROFILE_DATA.bio.split('\n');
    document.getElementById('bio-name').textContent = PROFILE_DATA.name;
    document.getElementById('bio-text').innerHTML = bioLines.slice(1, bioLines.length - 1).join('<br>');
    document.getElementById('bio-link').textContent = PROFILE_DATA.link;
    document.getElementById('bio-link').href = "https://" + PROFILE_DATA.link;
}

// 2. Renderizar Destaques
function renderHighlights() {
    const highlightsList = document.getElementById('highlights-list');
    highlightsList.innerHTML = '';

    PROFILE_DATA.highlights.forEach((highlight, index) => {
        const li = document.createElement('li');
        li.className = 'highlight-item';
        li.innerHTML = `
            <div class="highlight-cover">
                <img src="${highlight.cover}" alt="${highlight.name}">
            </div>
            <div class="highlight-name">${highlight.name}</div>
        `;
        li.onclick = () => openHighlight(index); // <- adiciona ação de clique
        highlightsList.appendChild(li);
    });
    }
    
let currentHighlightIndex = 0;
let currentStoryIndex = 0;


function openHighlight(index) {
    currentHighlightIndex = index;
    currentStoryIndex = 0;

    const highlight = PROFILE_DATA.highlights[index];
    showStory(highlight.stories[currentStoryIndex]);

    document.getElementById('highlightModal').classList.add('active');
    }

function showStory(src) {
    document.getElementById('highlight-image').src = src;
    }

function closeHighlight() {
    document.getElementById('highlightModal').classList.remove('active');
    }

function nextStory() {
    const highlight = PROFILE_DATA.highlights[currentHighlightIndex];
        if (currentStoryIndex < highlight.stories.length - 1) {
        currentStoryIndex++;
        showStory(highlight.stories[currentStoryIndex]);
        } else {
        closeHighlight(); // fecha ao terminar
        }
    }

function prevStory() {
    const highlight = PROFILE_DATA.highlights[currentHighlightIndex];
        if (currentStoryIndex > 0) {
        currentStoryIndex--;
        showStory(highlight.stories[currentStoryIndex]);
     }
    }


// 3. Renderizar Publicações
function renderPosts() {
    const postGrid = document.getElementById('post-grid');
    postGrid.innerHTML = '';

    PROFILE_DATA.posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post-item';
        div.setAttribute('data-post-id', post.id);
        div.onclick = () => openModal(post.id);
        div.innerHTML = `<img src="${post.image}" alt="Publicação ${post.id}">`;
        postGrid.appendChild(div);
    });
}

// 4. Funcionalidade do Modal
function setupModalListeners() {
    const modal = document.getElementById('postModal');
    // Fechar modal clicando fora
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

function openModal(postId) {
    const post = PROFILE_DATA.posts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.getElementById('postModal');
    const modalImageContainer = document.getElementById('modal-image-container');
    
    // Conteúdo do Modal
    modalImageContainer.innerHTML = `<img src="${post.image}" alt="Publicação ${post.id}">`;
    document.getElementById('modal-description').textContent = post.description;
    document.getElementById('modal-date').textContent = post.date;

    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('postModal');
    modal.classList.remove('active');
}

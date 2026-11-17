const loginForm = document.getElementById('loginForm');
const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const erroMsg = document.getElementById('erroMsg');

const API_LOGIN_URL = 'http://localhost:3000/api/login';

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    erroMsg.textContent = '';

    const login = inputLogin.value.trim();
    const senha = inputSenha.value.trim();

    try {
        const response = await fetch(API_LOGIN_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, senha })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            // Salva a flag de autenticação no localStorage conforme a apostila pede
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userLogado', login);

            // Redireciona para a tela principal (index.html)[cite: 29]
            window.location.href = 'index.html';
        } else {
            erroMsg.textContent = data.error || 'Usuário ou senha inválidos.';
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        erroMsg.textContent = 'Digite um perfil válido.';
    }
});
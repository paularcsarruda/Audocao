function showError(elementId, message) {
     const el = document.getElementById(elementId);
     if (!el) return;
     el.textContent = message;
     el.classList.add('visible');
}

function hideError(elementId) {
     const el = document.getElementById(elementId);
     if (el) el.classList.remove('visible');
}

function isValidEmail(email) {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const loginForm = document.querySelector('.auth-form');
if (loginForm && document.getElementById('password') && !document.getElementById('confirm-password')) {
     loginForm.addEventListener('submit', (e) => {
          e.preventDefault();

          const email = document.getElementById('email').value.trim();
          const password = document.getElementById('password').value;

          if (!isValidEmail(email)) {
               alert('Informe um e-mail válido.');
               return;
          }

          if (password.length < 8) {
               alert('A senha deve ter no mínimo 8 caracteres.');
               return;
          }

          window.location.href = 'home.html';
     });
}

const cadastroForm = document.querySelector('.auth-form');
if (cadastroForm && document.getElementById('confirm-password')) {
     cadastroForm.addEventListener('submit', (e) => {
          e.preventDefault();

          const nome = document.getElementById('nome').value.trim();
          const email = document.getElementById('email').value.trim();
          const password = document.getElementById('password').value;
          const confirmPassword = document.getElementById('confirm-password').value;

          if (nome.length < 2) {
               alert('Informe seu nome completo.');
               return;
          }

          if (!isValidEmail(email)) {
               alert('Informe um e-mail válido.');
               return;
          }

          if (password.length < 8) {
               alert('A senha deve ter no mínimo 8 caracteres.');
               return;
          }

          if (password !== confirmPassword) {
               alert('As senhas não coincidem.');
               return;
          }

          alert('Conta criada com sucesso! Faça login para continuar.');
          window.location.href = 'login.html';
     });
}

const doarForm = document.getElementById('doar-form');
if (doarForm) {
     doarForm.addEventListener('submit', (e) => {
          e.preventDefault();
          hideError('contato-error');

          const contato = document.getElementById('contato').value.trim();

          if (!isValidEmail(contato)) {
               showError('contato-error', 'Informe um e-mail válido.');
               return;
          }

          doarForm.reset();
          const success = document.getElementById('doar-success');
          success.classList.add('visible');
          setTimeout(() => success.classList.remove('visible'), 5000);
     });
}

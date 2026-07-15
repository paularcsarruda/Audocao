const form = document.getElementById("reset-password-form");
const passwordInput = document.getElementById("password");
const confirmationInput = document.getElementById("password-confirmation");
const message = document.getElementById("reset-message");
const resetButton = document.getElementById("reset-button");

const params = new URLSearchParams(window.location.search);
const token = params.get("token");

if (!token) {
  showMessage("O link de recuperação é inválido.", "error");
  resetButton.disabled = true;
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const password = passwordInput.value;
  const confirmation = confirmationInput.value;

  if (password.length < 8) {
    showMessage("A senha deve ter pelo menos 8 caracteres.", "error");
    return;
  }

  if (password !== confirmation) {
    showMessage("As senhas não coincidem.", "error");
    return;
  }

  resetButton.disabled = true;
  resetButton.textContent = "Alterando...";

  try {
    const response = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token,
        password
      })
    });

    if (!response.ok) {
      throw new Error("Token inválido ou expirado");
    }

    showMessage("Senha alterada com sucesso.", "success");

    form.reset();

    setTimeout(function () {
      window.location.href = "login.html";
    }, 1800);
  } catch (error) {
    showMessage(
      "O link é inválido ou expirou. Solicite uma nova recuperação.",
      "error"
    );
  } finally {
    resetButton.disabled = false;
    resetButton.textContent = "Alterar senha";
  }
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = `form-message ${type}`;
}
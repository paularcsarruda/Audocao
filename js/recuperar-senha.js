const form = document.getElementById("forgot-password-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("form-message");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  message.textContent = "";
  message.className = "form-message";

  if (!email) {
    showMessage("Informe seu e-mail.", "error");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  try {
    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      throw new Error("Falha ao solicitar recuperação");
    }

    showMessage(
      "Se existir uma conta com esse e-mail, enviaremos as instruções de recuperação.",
      "success"
    );

    form.reset();
  } catch (error) {
    showMessage(
      "Não foi possível enviar a solicitação. Tente novamente.",
      "error"
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Enviar link de recuperação";
  }
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = `form-message ${type}`;
}
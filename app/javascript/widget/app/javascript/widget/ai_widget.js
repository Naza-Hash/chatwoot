document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("ai-chat-form");
  const responseBox = document.getElementById("ai-chat-response");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const message = form.querySelector("input[name='message']").value;

    responseBox.innerHTML = "Thinking...";

    const res = await fetch("/widget/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    });

    const data = await res.json();
    responseBox.innerHTML = data.reply || "No response";
  });
});

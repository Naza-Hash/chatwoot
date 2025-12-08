document.addEventListener("DOMContentLoaded", () => {
  // Create bubble button
  const bubble = document.createElement("div");
  bubble.id = "chat-bubble";
  bubble.innerHTML = "💬";
  bubble.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: #4f46e5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    cursor: pointer;
    z-index: 99999;
  `;

  // Create chat window
  const chat = document.createElement("div");
  chat.id = "chat-window";
  chat.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 380px;
    height: 520px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0,0,0,0.2);
    display: none;
    flex-direction: column;
    overflow: hidden;
    z-index: 99999;
  `;

  chat.innerHTML = `
    <div style="
      padding: 15px;
      background: #4f46e5;
      color: white;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    ">
      <span>Assistant</span>
      <span id="close-chat" style="cursor:pointer; font-size:24px;">✖</span>
    </div>

    <iframe src="/widget/chat" style="width:100%; height:100%; border:none;"></iframe>
  `;

  document.body.appendChild(bubble);
  document.body.appendChild(chat);

  // Bubble click → open chat
  bubble.onclick = () => {
    chat.style.display = "flex";
    bubble.style.display = "none";
  };

  // Close button → hide chat
  document.getElementById("close-chat").onclick = () => {
    chat.style.display = "none";
    bubble.style.display = "flex";
  };
});

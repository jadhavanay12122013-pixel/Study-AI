let publicChats = [];

function askQuestion() {
  const question = document.getElementById("questionInput").value;
  if (!question) return;

  const aiAnswer = "This is a simulated AI answer for: " + question;

  const chatEntry = { question: question, answer: aiAnswer };
  publicChats.push(chatEntry);

  document.getElementById("answerBox").innerText = aiAnswer;
  loadChats();
}

function loadChats() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const feed = document.getElementById("chatFeed");
  feed.innerHTML = "";

  publicChats
    .filter(chat => chat.question.toLowerCase().includes(searchText))
    .forEach(chat => {
      const div = document.createElement("div");
      div.innerHTML = `<b>Q:</b> ${chat.question}<br><b>A:</b> ${chat.answer}<hr>`;
      feed.appendChild(div);
    });
}

let questions = [
  {
    q: "Java is mainly used for?",
    options: ["Web", "Mobile", "All", "None"],
    answer: "All"
  },
  {
    q: "Which is backend language?",
    options: ["HTML", "CSS", "Java", "Bootstrap"],
    answer: "Java"
  }
];

let score = 0;
let time = 300;

profileName.innerText = "Profile: " + localStorage.getItem("profile");

questions.forEach((q, i) => {
  quiz.innerHTML += `
    <p>${i+1}. ${q.q}</p>
    ${q.options.map(opt =>
      `<input type="radio" name="q${i}" value="${opt}">${opt}<br>`
    ).join("")}
  `;
});

setInterval(() => {
  time--;
  document.getElementById("time").innerText = time;
  if (time === 0) submitQuiz();
}, 1000);

function submitQuiz() {
  questions.forEach((q, i) => {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });

  let result = score >= 41 ? "Qualified ✅" : "Not Qualified ❌";

  let record = {
    email: localStorage.getItem("currentUser"),
    profile: localStorage.getItem("profile"),
    score: score,
    result: result
  };

  let data = JSON.parse(localStorage.getItem("results")) || [];
  data.push(record);
  localStorage.setItem("results", JSON.stringify(data));

  alert(`Score: ${score}\n${result}`);
  window.location.href = "dashboard.html";
}

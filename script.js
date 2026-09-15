const PHONE = "5531988712650";

const messages = {
  geral: "Olá! Vim pelo site da Filhos de Chico e gostaria de saber mais sobre os produtos. 🐾",
  cachorros: "Olá! Vim pelo site da Filhos de Chico e gostaria de saber mais sobre as rações para cachorros. 🐶",
  gatos: "Olá! Vim pelo site da Filhos de Chico e gostaria de saber mais sobre as rações para gatos. 🐱",
  insumos: "Olá! Vim pelo site da Filhos de Chico e gostaria de saber mais sobre os insumos disponíveis. 🌽🐔",
  localizacao: "Olá! Estou vendo o site da Filhos de Chico e gostaria de saber como chegar à loja. 📍"
};

document.querySelectorAll("[data-wa]").forEach(link => {
  const key = link.dataset.wa || "geral";
  link.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(messages[key] || messages.geral)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

function updateOpenStatus() {
  const el = document.getElementById("openStatus");
  if (!el) return;
  const now = new Date();
  const day = now.getDay(); // 0 domingo
  const minutes = now.getHours() * 60 + now.getMinutes();
  let open = false;
  if (day >= 1 && day <= 5) open = minutes >= 480 && minutes < 1080;
  if (day === 6) open = minutes >= 480 && minutes < 720;
  el.textContent = open ? "● ABERTO AGORA" : "● FECHADO AGORA";
  el.style.background = open ? "#267440" : "#6d4b30";
}
updateOpenStatus();
setInterval(updateOpenStatus, 60000);

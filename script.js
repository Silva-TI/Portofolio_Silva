const menuButton=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
menuButton.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.textContent=open?"×":"☰";});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.textContent="☰";}));
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll(".filter-button").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter-button").forEach(b=>b.classList.remove("active"));
  button.classList.add("active");
  const filter=button.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card=>{
    card.classList.toggle("hidden",filter!=="all" && card.dataset.category!==filter);
  });
}));

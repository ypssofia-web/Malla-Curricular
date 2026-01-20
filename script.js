const ramos = document.querySelectorAll(".ramo");

// cargar progreso
ramos.forEach(ramo => {
  const id = ramo.dataset.id;
  if (id && localStorage.getItem(id) === "aprobado") {
    ramo.classList.add("aprobado");
  }
});

// desbloquear al cargar
desbloquear();

ramos.forEach(ramo => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;

    ramo.classList.toggle("aprobado");

    const id = ramo.dataset.id;
    if (id) {
      localStorage.setItem(id, ramo.classList.contains("aprobado") ? "aprobado" : "");
    }

    desbloquear();
  });
});

function desbloquear() {
  ramos.forEach(ramo => {
    const prereq = ramo.dataset.pre;
    if (!prereq) return;

    const requisito = document.querySelector(`[data-id="${prereq}"]`);
    if (requisito && requisito.classList.contains("aprobado")) {
      ramo.classList.remove("bloqueado");
    }
  });
}

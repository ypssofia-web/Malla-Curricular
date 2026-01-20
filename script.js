document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {

    if (!materia.classList.contains('aprobable')) return;

    materia.classList.remove('aprobable');
    materia.classList.add('aprobada');

    verificarDesbloqueos();
  });
});

function verificarDesbloqueos() {
  document.querySelectorAll('.materia.bloqueada').forEach(materia => {

    const prereqs = materia.dataset.prereq.split(',');

    const cumplidos = prereqs.every(id => {
      const prereq = document.querySelector(`[data-id="${id}"]`);
      return prereq && prereq.classList.contains('aprobada');
    });

    if (cumplidos) {
      materia.classList.remove('bloqueada');
      materia.classList.add('aprobable');
    }
  });
}

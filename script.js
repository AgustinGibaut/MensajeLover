  // Crear partículas animadas
  const particlesContainer = document.getElementById("particles-container");
  const symbols = ['❤️', '🌟', '💖', '✨', '💕'];
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (6 + Math.random() * 4) + 's';
    particle.style.fontSize = (1 + Math.random() * 2) + 'rem';
    particlesContainer.appendChild(particle);
  }

  // Función para iniciar mensaje (con efecto de carga de 2s)
  function startMessage() {
    const loading = document.getElementById('loading-screen');
    loading.style.opacity = '1';
    loading.style.display = 'flex';

    // Mostrar mensaje "Esto va para ti..." durante 2 segundos
    setTimeout(() => {
      loading.style.opacity = '0';

      // Después de que se desvanece el loader (1s más), lo ocultamos completamente
      setTimeout(() => {
        loading.style.display = 'none';
        toggleDialog('dialog-messages');
      }, 1000); // coincide con transition: opacity 1s ease;
    }, 2000); // duración del mensaje de carga
  }

  // Mostrar u ocultar el diálogo
  function toggleDialog(dialogId) {
    if (!dialogId) {
      const openDialog = document.querySelector("dialog[open]");
      if (openDialog) {
        openDialog.classList.remove("visible");
        openDialog.classList.add("closing");
        setTimeout(() => {
          openDialog.close();
          openDialog.classList.remove("closing");
        }, 1000);
      }
      return;
    }

    const dialog = document.getElementById(dialogId);
    if (!dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => {
        dialog.classList.add("visible");
      });
    }
  }

  // Opcional: ocultar manualmente loader si la animación se cuelga por error (backup de seguridad)
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loading = document.getElementById('loading-screen');
      if (loading && loading.style.display !== 'none') {
        loading.style.opacity = '0';
        setTimeout(() => loading.style.display = 'none', 1000);
      }
    }, 5000); // a los 5s fuerza el cierre del loader por si hay error
  });
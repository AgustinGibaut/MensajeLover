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


  function startMessage() {
    const loading = document.getElementById('loading-screen');
    loading.style.opacity = '1';
    loading.style.display = 'flex';

   
    setTimeout(() => {
      loading.style.opacity = '0';

   
      setTimeout(() => {
        loading.style.display = 'none';
        toggleDialog('dialog-messages');
      }, 1000);
    }, 2000); 
  }


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

 
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loading = document.getElementById('loading-screen');
      if (loading && loading.style.display !== 'none') {
        loading.style.opacity = '0';
        setTimeout(() => loading.style.display = 'none', 1000);
      }
    }, 5000); 
  });
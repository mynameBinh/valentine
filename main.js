onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    setTimeout(() => {
      window.location.href = 'thiep.html';
    }, 8000);
  };
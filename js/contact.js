  function envoyer() {
      const nom     = document.getElementById('nom').value.trim();
      const email   = document.getElementById('email').value.trim();
      const sujet   = document.getElementById('sujet').value;
      const message = document.getElementById('message').value.trim();

      
      if (!nom || !email || !sujet || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
      }
  function validerEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

  if (!validerEmail(email)) {
    alert('Email invalide. Doit contenir un @');
  return;
} document.getElementById('messageOk').style.display = 'block';
      document.getElementById('nom').value     = '';
      document.getElementById('email').value   = '';
      document.getElementById('sujet').value   = '';
      document.getElementById('message').value = '';

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
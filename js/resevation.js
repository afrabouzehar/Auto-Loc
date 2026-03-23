 // Mettre la date minimum à aujourd'hui
    const aujourd_hui = new Date().toISOString().split('T')[0];//Mettre la date minimum à aujourd’hui
    document.getElementById('dateDebut').min = aujourd_hui;
    document.getElementById('dateFin').min = aujourd_hui;

    // Mettre à jour le récapitulatif
    function mettreAJourRecap() {
      const voitureVal = document.getElementById('voiture').value;
      const debut = document.getElementById('dateDebut').value;
      const fin = document.getElementById('dateFin').value;

      // Afficher le nom de la voiture
      if (voitureVal) {
        const nom = voitureVal.split('|')[0];
        document.getElementById('recapVoiture').textContent = nom;
      }

      // Afficher les dates
      if (debut) document.getElementById('recapDebut').textContent = formaterDate(debut);
      if (fin)   document.getElementById('recapFin').textContent   = formaterDate(fin);

      // Calculer le total
      if (voitureVal && debut && fin) {
        const prixParJour = parseInt(voitureVal.split('|')[1]);
        const date1 = new Date(debut);
        const date2 = new Date(fin);
        const nbJours = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

        if (nbJours > 0) {
          document.getElementById('recapDuree').textContent = nbJours + (nbJours > 1 ? ' jours' : ' jour');
          document.getElementById('recapTotal').textContent = (nbJours * prixParJour) + '€';
        }
      }
    }

    // Formater la date : 2025-01-15 → 15/01/2025
    function formaterDate(str) {
      const [a, m, j] = str.split('-');
      return j + '/' + m + '/' + a;
    }

    // Valider et confirmer
    function confirmer() {
      const prenom  = document.getElementById('prenom').value.trim();
      const nom     = document.getElementById('nom').value.trim();
      const email   = document.getElementById('email').value.trim();
      const voiture = document.getElementById('voiture').value;
      const debut   = document.getElementById('dateDebut').value;
      const fin     = document.getElementById('dateFin').value;

      if (!prenom || !nom || !email || !voiture || !debut || !fin) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }

      document.getElementById('messageOk').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
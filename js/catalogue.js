 // Filtrer les voitures selon la catégorie
    function filtrer(categorie, boutonClique) {
      // Changer le bouton actif
      document.querySelectorAll('.btn-filtre').forEach(b => b.classList.remove('actif'));
      boutonClique.classList.add('actif');

      // Afficher ou cacher les cartes
      document.querySelectorAll('.carte-voiture').forEach(carte => {
        if (categorie === 'tous' || carte.dataset.categorie === categorie) {
          carte.classList.remove('cache');
        } else {
          carte.classList.add('cache');
        }
      });
    }
function filtrer(categorie, bouton) {
  document.querySelectorAll('.btn-filtre').forEach(btn => {
    btn.classList.remove('actif');
  });


  bouton.classList.add('actif');

  document.querySelectorAll('.carte-voiture').forEach(carte => {
    const carteCategorie = carte.getAttribute('data-categorie');
    const estVisible = categorie === 'tous' || carteCategorie === categorie;

    carte.classList.toggle('cache', !estVisible);
  });
}
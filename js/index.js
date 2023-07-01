document.addEventListener('DOMContentLoaded', function() {
  const linkElement1 = document.getElementById('git1');
  const linkElement2 = document.getElementById('git2');
  const imgPerfil = document.getElementById('ImgPerfil');
  const NomPerfil = document.getElementById('n-perfil');

  fetch("https://api.github.com/repos/Another818/AsistenteVirtual")
    .then(res => res.json())
    .then(response => {
      linkElement1.href = response.html_url;
    })
    .catch(error => {
      console.log('Error:', error);
    });

    fetch("https://api.github.com/repos/Another818/Proyecto_6")
    .then(res => res.json())
    .then(response => {
      linkElement2.href = response.html_url;
    })
    .catch(error => {
      console.log('Error:', error);
    });

    fetch("https://api.github.com/users/Another818")
    .then(res => res.json())
    .then(response => {
      imgPerfil.src = response.avatar_url;
      NomPerfil.textContent = response.name
    })
    .catch(error => {
      console.log('Error:', error);
    });
});
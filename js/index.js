
fetch("https://api.github.com/repos/Another818/AsistenteVirtual")
  .then(res => res.json())
  .then(response => {
  console.log(response)
})

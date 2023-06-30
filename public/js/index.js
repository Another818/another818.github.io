const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/vnd.github+json',
    'Authorization': "Bearer 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"
  }
}

fetch("https://api.github.com/repos/Another818/AsistenteVirtual", options)
  .then(res => res.json())
  .then(response => {
  console.log(response)
})

const root = document.getElementById('root')

request(URL)
  .then(({ data }) => renderPage(data))
  .catch(err => console.log(err))

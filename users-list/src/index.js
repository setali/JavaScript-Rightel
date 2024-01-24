import renderPage from './render/page'
import { URL } from './utils/constants'
import request from './utils/request'

request(URL)
  .then(({ data }) => renderPage(data))
  .catch(err => console.log(err))

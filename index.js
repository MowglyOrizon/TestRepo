const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Secure Hello World!')
})

app.get('/unsecure', (req, res, next) => {
  res.send('Unsecure Hello World');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
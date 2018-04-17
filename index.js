const path = require('path')
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.get('/test', function (req, res) {
  const defaultTmplParams = {
    settings: {
      'view options': {
        delimiter: '|',
        rmWhitespace: true,
        compileDebug: process.env.NODE_ENV !== 'production',
        cache: true
      }
    },
    title: 'titleValue'
  }
  let promise = new Promise((resolve, reject) => res.render(path.resolve('./index-test.ejs'), defaultTmplParams, (err, html) => {
    if (err) {
      reject(err)
    } else {
      resolve(html)
    }
  }))
  promise.then(html => res.status(200).send(html))
})

app.listen(3000, () => console.log('listening on port 3000'))

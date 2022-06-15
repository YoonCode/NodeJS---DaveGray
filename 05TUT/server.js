const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logEvents')
const PORT = process.env.PORT || 3500

// custom middleware logger
app.use(logger)

// built-in middleware to handle urlencoded data
// in other words, form data
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

// serve static files
app.use(express.static(path.join(__dirname, '/public')))

app.get('^/$|/index(.html)?', (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname })
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html') // 302 by default
})

// Route Handlers
app.get(
  '/hello(.html)?',
  (req, res, next) => {
    console.log('attepted to load hello.html')
    next()
  },
  (req, res) => {
    res.send('Hello World!')
  },
)

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

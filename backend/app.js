const express = require('express')
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const app = express()
const cors = require('cors')
const config = { port: process.env.PORT || 3000 }

// middleware
app.use(cors())

// your API route(s) here
app.get("/lorem/", (req, res) => {
  res.json({ lorem: `lorem: ${lorem.generateSentences(2)}` })
}
)


app.get('*', function (req, res) {
  res.status(404).json({ error: 'route not found' })
})

// start server
app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`)
})
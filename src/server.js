const express = require("express")
const cors = require("cors")
const app = express()
port = 5173

app.use(cors())
app.get('/api', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
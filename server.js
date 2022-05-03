const app = require('./index')

app.listen(process.env.PORT || 3001, () => {
  console.log('Listening to port 3001')
})

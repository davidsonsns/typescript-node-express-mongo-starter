import app from './app'

const port = process.env.PORT || 3000

app.listen(port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[SERVER] Running at port ${port}`)
  }
})

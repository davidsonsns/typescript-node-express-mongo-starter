import express from 'express'

console.log('TCL: express', express)

const server = express()

server.get('/', (req, res) => {
  res.send('Hello ts-node!')
})


export default server

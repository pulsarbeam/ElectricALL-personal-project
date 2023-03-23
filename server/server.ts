import { join } from 'node:path'
import express from 'express'
import path from 'path'
import fs from 'fs'

const server = express()

server.use(express.static(join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server

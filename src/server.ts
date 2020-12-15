import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
// @ts-ignore
import indexRouter from './routes/index'
// @ts-ignore
import cors from 'cors'

const app = express()

app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/api', indexRouter)
app.use('/api/users', indexRouter)

const port = 8080 // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!')
})

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

export default app

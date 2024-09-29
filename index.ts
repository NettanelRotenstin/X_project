import express, { Express } from 'express'
import cookieParser from 'cookie-parser'
import authController from './src/controllers/authController'
import userController from './src/controllers/userController' 
import postController from './src/controllers/postController'
import 'dotenv/config'

const app: Express = express()

const PORT: number = 1234

app.use(express.json())
app.use(cookieParser())

app.use('/auth', authController)
app.use('/users', userController)
app.use('/posts', postController)






app.listen(process.env.PORT, (): void => {
    console.log(`server started on port : ${process.env.PORT} visit http://localhost:${process.env.PORT} `);
})




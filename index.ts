import express, { Express } from 'express'
import 'dotenv/config'
import authController from './controllers/authController'
import userController from './controllers/userController'
import postController from './controllers/postController'

const app: Express = express()

const PORT:number = 1234

app.use(express.json())

app.use('/auth', authController)
app.use('/users', userController)
app.use('/posts', postController)






app.listen(process.env.PORT, (): void => {
    console.log(`server started on port : ${process.env.PORT} visit http://localhost:${process.env.PORT} `);
})




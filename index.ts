import express,{Express} from 'express'
import 'dotenv/config'
import authController from './controllers/authController'
import userController from './controllers/userController'
import postController from './controllers/postController'

const app: Express = express()

 app.use('/auth',authController)
 app.use('/user',userController)
 app.use('/post',postController)
 

 


app.listen(process.env.PORT, (): void => {
    console.log(`server started on port : ${process.env.PORT} visit http://localhost:${process.env.PORT} `);
})



 
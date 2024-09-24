import express,{Express} from 'express'
import 'dotenv/config'

const app: Express = express()

 
 

app.use(express.json())


app.listen(process.env.PORT, (): void => {
    console.log(`server started on port : ${process.env.PORT} visit http://localhost:${process.env.PORT} `);
})



 
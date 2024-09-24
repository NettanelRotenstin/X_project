import express from 'express';
import 'dotenv/config';
const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`server started on port : ${process.env.PORT} visit http://localhost:${process.env.PORT} `);
});

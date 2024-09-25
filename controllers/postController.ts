import express, { Router,Request,Response } from 'express'
import newPostDTO from '../DTO/newPostDTO'
import PostService from '../services/postService'

const router:Router = express.Router()

//get all posts
router.get('/',async (req:Request, res:Response): Promise<void> =>{
    try{
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        })
    }catch{
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})



//create post
router.post('/',async (req:Request<any,any,newPostDTO>, res:Response): Promise<void> =>{
    try{
        const result = await PostService.createNewPost(req.body);
        if (result){
            res.json({
                err: false,
                message: "I was too lazy to change the default message",
                data: undefined,
              })
    }else{
        throw new Error("Cant Save New post to the file");
    }}catch{
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})

//search post
router.get('/search/:name',async (req:Request, res:Response): Promise<void> =>{
    try{
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        })
    }catch{
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})


//like post
router.patch('/like',async (req:Request, res:Response): Promise<void> =>{
    try{
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        })
    }catch{
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})

//get one post
router.get('/:id',async (req:Request, res:Response): Promise<void> =>{
    try{
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        })
    }catch{
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})




export default router
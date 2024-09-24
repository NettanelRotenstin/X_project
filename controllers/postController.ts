import express, { Router,Request,Response } from 'express'

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
router.post('/',async (req:Request, res:Response): Promise<void> =>{
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
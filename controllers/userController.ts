import express, { Router,Request,Response } from 'express'

const router:Router = express.Router()


//register
router.post('/register',async (req:Request, res:Response): Promise<void> =>{
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


//follow
router.post('/follow',async (req:Request, res:Response): Promise<void> =>{
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


//search users
router.get('/search',async (req:Request, res:Response): Promise<void> =>{
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


//profile
router.get('/profile',async (req:Request, res:Response): Promise<void> =>{
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

//my followers
router.get('/followers',async (req:Request, res:Response): Promise<void> =>{
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

//my follows
router.get('/following',async (req:Request, res:Response): Promise<void> =>{
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

 
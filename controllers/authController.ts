import express, { Router,Request,Response } from 'express'

const router: Router = express.Router()

router.post('/login',async (req:Request, res:Response): Promise<void> =>{
    try{
        res.json({
            err: false,
            message: `authcontroller login try is ok`,
            data: undefined
        })
    }catch{
        res.status(400).json({
            err: true,
            message: `authcontroller login catch`,
            data: null
        })
    }
})


router.post('/logout',async (req:Request, res:Response): Promise<void> =>{
    try{
        res.json({
            err: false,
            message: `authcontroller logout try is ok`,
            data: undefined
        })
    }catch{
        res.status(400).json({
            err: true,
            message: `authcontroller logout catch`,
            data: null
        })
    }
})




export default router
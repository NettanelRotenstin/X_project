import express, { Router, Request, Response } from 'express'
import authService from '../services/authService'


const router: Router = express.Router()

router.post('/login', async (req: Request, res: Response): Promise<void> => {
    try {
        const token = await authService.login(req.body)
        res.json({
            message: `you got a token`,
            data: token
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `no token created`,
            data: null
        })
    }
})

//logout
router.post('/logout', async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({
            err: false,
            message: `authcontroller logout try is ok`,
            data: undefined
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `authcontroller logout catch`,
            data: null
        })
    }
})




export default router
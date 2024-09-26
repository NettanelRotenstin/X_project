import express, { Router, Request, Response } from 'express'
import newUserDTO from '../DTO/newUserDTO'
import userService from '../services/userService'
import User from '../models/userModel';

const router: Router = express.Router()


//register
router.post("/register", async (req: Request<any, any, newUserDTO>, res: Response): Promise<void> => {
    try {
        const result = await userService.createNewUser(req.body);
        if (result) {
            res.json({
                err: false,
                message: "I was too lazy to change the default message",
                data: undefined,
            });
        } else {
            throw new Error("Cant Save New User to the file");
        }
    } catch (err) {
        res.status(404).json({
            err: true,
            message: "I was too lazy to change the default message",
            data: null,
        });
    }
});


//follow
router.patch('/follow/:iId/:oId', async (req: Request, res: Response): Promise<void> => {
    try {
        userService.follow(req.params.iId, req.params.oId)
        res.json({
            success: true
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller follow catch`,
            data: null
        })
    }
})


//search users
router.get('/search', async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})


//profile
router.get('/profile', async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})

//my followers
router.get('/followers/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const myFollowers = await userService.getFollowers(req.params.id)
        res.json({
            soccess: true,
            myFollowers
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller followers catch`,
            data: null
        })
    }
})

//my follows
router.get('/following', async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})

//get one user
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const user: User | undefined = await userService.getOneUser(req.params.id)
        console.log(user?.userName)
        res.json({
            soccess: true,
            username:user?.birthday
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller oneuser catch`,
            data: null
        })
    }
})



export default router


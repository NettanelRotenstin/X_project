import express, { Router, Request, Response } from 'express'
import newPostDTO from '../DTO/newPostDTO'
import PostService from '../../src/services/postService'
import Post from '../models/postModel'

const router: Router = express.Router()

//get all posts
router.get('/', async (req: Request, res: Response): Promise<Post[] | void> => {
    try {
        const result = await PostService.getAllPosts()
        if (result) {
            res.json({
                err: false,
                result
            })
        }
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})



//create post
router.post('/', async (req: Request<any, any, newPostDTO>, res: Response): Promise<void> => {
    try {
        const result = await PostService.createNewPost(req.body);
        if (result) {
            res.json({
                err: false,
                message: "I was too lazy to change the default message",
                data: undefined,
            })
        } else {
            throw new Error("Cant Save New post to the file");
        }
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})

//search post
router.get('/search', async (req: Request, res: Response): Promise<void> => {
    try {
        const result: Post[] | void = await PostService.getBySearch(req.query.content as string)
        res.json({
            result
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `postcontroller search catch`,
            data: null
        })
    }
})


//like post
router.patch('/like/:idU/:idP', async (req: Request, res: Response): Promise<void> => {
    try {
        await PostService.like(req.params.idU, req.params.idP)
        res.json({
            status: `OK`
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        })
    }
})

//get one post
router.get('/:id', async (req: Request, res: Response): Promise<Post[] | void> => {
    try {
        const post: Post | undefined = await PostService.getOnePosts(req.params.id)
        res.json({
            post
        })
    } catch {
        res.status(400).json({
            err: true,
            message: `postcontroller onepost catch`,
            data: null
        })
    }
})




export default router
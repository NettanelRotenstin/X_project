import { getFileData, saveFileData } from "../config/fileDataLayer"
import newPostDTO from "../DTO/newPostDTO"
import Post from "../models/postModel"

export default class PostService {
    public static async createNewPost(newPost: newPostDTO): Promise<boolean> {
        const { authorId, content, hashtags, ref } = newPost
        const post: Post = new Post(authorId, content, hashtags, ref)

        let posts: Post[] = await getFileData<Post>(`users`) as Post[]
        if (!posts) posts = []

        posts.push(post)

        return await saveFileData<Post>(`posts`, posts)
    }


    public static async getAllPosts(): Promise<Post[]> {
        let posts: Post[] = await getFileData<Post>(`posts`) as Post[]
        if (!posts) posts = []
        return posts
    }

    public static async getOnePosts(idStr: string): Promise<Post | undefined> {
        const posts: Post[] = await this.getAllPosts()
        const post = posts.find(x => x.id === idStr)
        return post
    }

    public static async getBySearch(strToSearch: string): Promise<Post[] | void> {
        const posts: Post[] = await this.getAllPosts()
        const filterPosts: Post[] | undefined = posts.filter(x => x.content.includes(strToSearch))
        return filterPosts
    }

    public static async like(userID: string, postId: string): Promise<void> {
        const posts: Post[] = await this.getAllPosts()
        const post: number = posts.findIndex(x => x.id === postId && x.authorId === userID)
        posts[post].likes.push(userID)

        await saveFileData<Post>(`posts`, posts)
    }

}
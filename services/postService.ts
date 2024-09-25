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
}
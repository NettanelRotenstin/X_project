import newUserDTO from "../DTO/newUserDTO";
import fs from 'fs/promises'
import User from "../models/userModel";
import { getFileData, saveFileData } from "../config/fileDataLayer";



export default class userService {
    public static async createNewUser(newUser: newUserDTO): Promise<boolean> {
        const { username, password, email, birthdate, avatarUrl } = newUser
        const user: User = new User(username, password, email, birthdate, avatarUrl)

        let users: User[] = await getFileData<User>(`users`) as User[]
        if (!users) users = []

        users.push(user)

        return await saveFileData<User>(`users`, users)
    }

    public static async follow(iId: string, oId: string): Promise<void> {
        const users: User[] | undefined = await getFileData<User>(`users`) as User[]
        const follow: number = users.findIndex(f => f.id === oId)
        users[follow].followeres.push(iId)
        const myfollowing: number = users.findIndex(f => f.id === iId)
        users[myfollowing].following.push(oId)
        await saveFileData<User>(`users`, users)
    }

    public static async getFollowers(id: string): Promise<string[] | undefined> {
        const users: User[] | undefined = await getFileData<User>(`users`) as User[]
        const myUser: User | undefined = users.find(f => f.id === id)
        return myUser?.followeres
    }

    public static async getOneUser(id: string): Promise<User | undefined> {
        const users: User[] | undefined = await getFileData<User>(`users`) as User[]
        const myUser: User | undefined = users.find(f => f.id === id)
        return myUser
    }


}
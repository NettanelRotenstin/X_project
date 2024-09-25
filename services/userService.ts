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
}
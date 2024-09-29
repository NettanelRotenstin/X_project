import newUserDTO from "../DTO/newUserDTO";
import User from "../models/userModel";
import { getFileData, saveFileData } from "../config/fileDataLayer";
import loginDTO from "../DTO/loginDTO";
import jwt from 'jsonwebtoken'



export default class authService {
    public static async login(userData: loginDTO): Promise<Error | string> {
        const { userName, password } = userData
        const users: User[] = await getFileData<User>(`users`) as User[]
        if (!users) throw new Error(`no users at all`)
        const user = users.find(u => u.userName === userName)

        if (!user) throw new Error(`user not found`)

        if (user.password !== password) throw new Error(`password isnt correct!`)

        const payload = {

        }


        return jwt.sign({ ...user, password: `*****` }, process.env.TOKEN_SECRET as string, {
            expiresIn: '10m'
        })
    }
}
import { json } from 'express'
import fs from 'fs/promises'

export const getFileData = async <T>(resource:string) :Promise <T[] | void> =>{
    try {
      
        const strData:string = await fs.readFile(`${__dirname}/../../data/${resource}.json`,`utf-8`)
         
        const parsedData:T[] = JSON.parse(strData)
        return parsedData
    } catch (error) {
        console.log(error)
    }
}


export const saveFileData = async <T>(resource:string,data:T[]):Promise<boolean> =>{
    try {
        const stringifyData:string = JSON.stringify(data)
        await  fs.writeFile(`${__dirname}/../../data/${resource}.json`,stringifyData,{
            encoding:`utf8`
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}
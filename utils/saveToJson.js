import {writeFile} from "fs/promises";

export async function saveToJson(dataToSave, filePath) {
    try {
        let jsonData = JSON.stringify(dataToSave)
        await writeFile(filePath, jsonData)
        console.log("Data Saved!")
    } catch (error) {
        console.log(`Data wasn't saved!: ${error}`)
    }
}
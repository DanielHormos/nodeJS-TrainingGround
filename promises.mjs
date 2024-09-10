import fetch from "node-fetch"
import { readFile } from "fs";

fetch("https://randomuser.me/api/?results=30")
    .then((response) => response.json())
    .then((data) => {
        throw new Error("This is the error that I made")
    })
    .then((results) => console.log(`We got ${results.length} rows`))
    .catch((err) => console.log("Something went wrong", { err }))

readFile("thisFileDoesntExist", "utf8", (err, file) => {
    if(err) {
        console.log("We got an error", { err })
    }
    console.log(`That file has ${file.split("\n").length} lines`)
})

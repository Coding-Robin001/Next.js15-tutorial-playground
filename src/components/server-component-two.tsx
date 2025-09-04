import fs from "fs"

export const ServerComponentTwo = () => {

    fs.readFileSync("src/components/card.tsx", "utf-8")

    return <h1>Server component two!</h1>
}
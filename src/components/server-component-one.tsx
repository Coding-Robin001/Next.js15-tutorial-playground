import fs from "fs"
import { ServerComponentTwo } from "./server-component-two"
import ClientComponentOne from "./client-component-one"

export const ServerComponentOne = () => {

    fs.readFileSync('src/components/card.tsx', "utf-8")

    return (
        <div>
            <h1>Server component one!</h1>
            <ClientComponentOne>
                <ServerComponentTwo />
            </ClientComponentOne>
        </div>
    )

}
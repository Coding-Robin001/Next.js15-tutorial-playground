import "server-only"

export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        use environment variables,
        interact with a database,
        process confidential information`
    )

    return "server result"
}


export default function serverFunction() {

    //will throw a build-time error as server-side APIs dont work on clients
    const fs = require("fs");
    const data = fs.readFileSync("secret.txt", "utf-8");

    console.log(data)
}

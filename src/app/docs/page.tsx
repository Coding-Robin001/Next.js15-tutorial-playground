import { cookies } from "next/headers"

export default async function Docs() {
  const cookieStore = await cookies()
  const theme = cookieStore.get("theme")?.value ?? "light"

  const bgColor = theme === "dark" ? "#343a40" : "#f8f9fa"
  const textColor = theme === "dark" ? "#fff" : "#000"



  return (
    <div
      className="main2 flex h-50 justify-center align-center"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="text-[2rem]">Documentation page(server component)</h2>
      <p>Current theme: {theme}</p>
      <ul>
        <li className="text-[1.3rem]">Documentation 1</li>
        <li className="text-[1.3rem]">Documentation 2</li>
        <li className="text-[1.3rem]">Documentation 3</li>
      </ul>
    </div>
  )
}

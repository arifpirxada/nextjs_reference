import Link from "next/link"

const Header = () => {
  return (
    <header className="flex px-2 pt-2">
        <Link href="/">Home</Link>
        <p className="ml-auto">Next js Data Fetching</p>
    </header>
  )
}

export default Header
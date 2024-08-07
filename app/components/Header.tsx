import Link from 'next/link'

const Header = () => {
    return (
        <nav className="border-4 border-b-red-500">
            <ul className="flex justify-between items-center px-4 pt-3 pb-4">
                <li className="text-2xl font-bold flex-1 text-left ml-4">
                    <Link href="/addbook" className="hover:text-red-500 transition-colors">
                        Добавить Книгу
                    </Link>
                </li>
                <li className="text-5xl font-bold flex-grow text-center">
                    <Link href="/" className="hover:text-red-500 transition-colors">
                        Словесностъ
                    </Link>
                </li>
                <li className="text-2xl font-bold flex-1 text-right mr-4">
                    <Link href="/about" className="hover:text-red-500 transition-colors">
                        О проекте
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
import { Navigation } from "@/components/Navigation";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
]

export const Header = () => {
    return (
        <header className="flex flex-row items-center gap-4 justify-center bg-gray-400 py-4">
            <Navigation navLinks={navItems} />
        </header>
    )
}

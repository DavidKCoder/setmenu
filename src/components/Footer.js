export default function Footer() {
    return (
        <footer className="bg-background-0 text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} SetMenu. All rights reserved.</p>
                <div className="flex gap-4 text-sm">
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

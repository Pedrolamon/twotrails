import logotw from "../assets/logotw.png";

export function Header() {
    return (
        <header className="bg-white text-[#6D8D7E] p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo e Nome da Marca */}
                <a href="/" className="flex items-center space-x-2">
                    <img className="w-12 h-12" src={logotw} alt="Logo TwoTrails" />
                    <span className="font-playfair text-xl font-bold text-[#333333]">TwoTrails</span>
                </a>
                
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#solutions" className="hover:text-[#A8795A] transition-colors">Soluções</a>
                    <a href="#us" className="hover:text-[#A8795A] transition-colors">Quem somos</a>
                    <a href="#project" className="hover:text-[#A8795A] transition-colors">Projetos</a>
                    <a href="#contact" className="hover:text-[#A8795A] transition-colors">Fale Conosco</a>
                </nav>

                <button className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
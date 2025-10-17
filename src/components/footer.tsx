


export function Footer (){
    return(
        <footer className="bg-[#6d8d7e] text-white py-12 px-4 md:px-0">
        <div className="container mx-auto flex flex-wrap justify-between">
   
            <div className="flex flex-col items-start space-y-4 w-full md:w-1/4">
                <p className="text-base md:text-[40px] font-playfair text-gray-200 ml-4">
                    Guiando pequenos negócios<br className="hidden md:inline-block" /> no caminho da inovação
                    </p>
            </div>
     
            <div className="w-full md:w-1/4 mt-8 md:mt-0">
              <h4 className="font-bold text-lg mb-4 text-white">Navegação</h4>
              <ul className=" space-y-2 text-gray-200">
                <li><a href="#" className="hover:text-[#e9f3e8] transition-colors">Home</a></li>
                <li><a href="#solutions" className="hover:text-[#e9f3e8] transition-colors">Soluções</a></li>
                <li><a href="#us" className="hover:text-[#e9f3e8] transition-colors">Quem somos</a></li>
                <li><a href="#project" className="hover:text-[#e9f3e8] transition-colors">Projetos</a></li>
                <li><a href="#contact" className="hover:text-[#e9f3e8] transition-colors">Fale Conosco</a></li>
              </ul>
            </div>
    
            <div className="w-full md:w-1/4 mt-8 md:mt-0">
              <h4 className="font-bold text-lg mb-4 text-white">Contato</h4>
              <ul className="space-y-2 text-gray-200">
                <li> <a href="mailto:teste@gmail.com" className="hover:text-[#e9f3e8] transition-colors">teste@gmail.com</a></li>
                <li><a href="tel:24992254110" className="hover:text-[#e9f3e8] transition-colors">(24)99225-4110</a></li>
              </ul>
             
              <h4 className="font-bold text-lg mt-6 mb-4 text-white">Siga-nos</h4>
              <ul className="flex space-x-4 text-gray-200">
                <li><a href="#" className="hover:text-[#e9f3e8] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#e9f3e8] transition-colors">LinkedIn</a></li>
              </ul>
            </div>
              <div className="w-full md:w-1/4 mt-8 md:mt-0">
                <h4 className="font-bold text-lg mb-4 text-white">Empresa</h4>
                <ul className="space-y-2 text-gray-200">
                    <li><a href="#termos" className="hover:text-[#e9f3e8] transition-colors">Termos de Serviço</a></li>
                    <li><a href="#politica" className="hover:text-[#e9f3e8] transition-colors">Política de Privacidade</a></li>
                </ul>
            </div>
        </div>


        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-200 text-sm">
            © {new Date().getFullYear()} TwoTrails. Todos os direitos reservados.
        </div>
        </footer>
    )
}
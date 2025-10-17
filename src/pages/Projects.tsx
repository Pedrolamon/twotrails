export function Projects() {
    return (
        <div>
            {/* Seção Principal da página de Projetos */}
            <section className="bg-[#e9f3e8] min-h-screen py-20 px-4 relative overflow-hidden">
                
                {/* Formas orgânicas de fundo */}
                <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[#6d8d7e] rounded-br-[100px] transform rotate-45"></div>
                <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#a8795a] rounded-tl-[100px] transform -rotate-45"></div>
                
                <div className="container mx-auto text-center relative z-10">
                    <p className="text-[#a8795a] font-semibold tracking-widest uppercase mb-2">Projetos</p>
                    <h1 className="font-playfair text-5xl font-bold text-[#333333] mb-4">
                        Caminhos de Sucesso Traçados
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
                        Veja como a TwoTrails ajudou pequenas empresas a transformarem seus desafios em histórias de sucesso e crescimento.
                    </p>
                    
                    {/* Grid de Cards dos Projetos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* Card do Projeto 1 */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <img src="https://via.placeholder.com/100" alt="Logo do Cliente" className="mx-auto rounded-full mb-6" />
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2">
                                Casos de sucesso
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Implementamos um sistema de automação de atendimento que aumentou a eficiência em 30%.
                            </p>
                            <a href="#case1" className="bg-[#a8795a] text-white px-6 py-2 rounded-full font-bold inline-block hover:bg-[#8e684a] transition-colors">
                                Ver Case Completo
                            </a>
                        </div>
                        
                        {/* Card do Projeto 2 */}
                        <div className="bg-[#a8795a] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-white">
                            <img src="https://via.placeholder.com/100" alt="Logo do Cliente" className="mx-auto rounded-full mb-6" />
                            <h3 className="font-playfair text-2xl font-bold mb-2">
                                Cases de sucesso
                            </h3>
                            <p className="mb-4">
                                Nossa solução de gestão de projetos reduziu o tempo de entrega em 40% para esta startup.
                            </p>
                            <a href="#case2" className="bg-white text-[#a8795a] px-6 py-2 rounded-full font-bold inline-block hover:bg-gray-100 transition-colors">
                                Ver Case Completo
                            </a>
                        </div>
                        
                        {/* Card do Projeto 3 */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <img src="https://via.placeholder.com/100" alt="Logo do Cliente" className="mx-auto rounded-full mb-6" />
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2">
                                Casos de sucesso
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Otimizamos o fluxo de trabalho e a comunicação interna para esta empresa familiar.
                            </p>
                            <a href="#case3" className="bg-[#a8795a] text-white px-6 py-2 rounded-full font-bold inline-block hover:bg-[#8e684a] transition-colors">
                                Ver Case Completo
                            </a>
                        </div>
                        
                        {/* Card do Projeto 4 */}
                        <div className="bg-[#6d8d7e] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-white">
                            <img src="https://via.placeholder.com/100" alt="Logo do Cliente" className="mx-auto rounded-full mb-6" />
                            <h3 className="font-playfair text-2xl font-bold mb-2">
                                Casos de sucesso
                            </h3>
                            <p className="mb-4">
                                Ajudamos a startup a escalar a sua operação com relatórios de desempenho precisos.
                            </p>
                            <a href="#case4" className="bg-white text-[#6d8d7e] px-6 py-2 rounded-full font-bold inline-block hover:bg-gray-100 transition-colors">
                                Ver Case Completo
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            

        </div>
    );
}
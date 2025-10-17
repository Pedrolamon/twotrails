export function Solutions() {
    return (
        <div>

            
            {/* Seção Principal - Hero Section */}
            <section className="bg-[#e9f3e8] py-20 px-4 md:px-0">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Coluna da Esquerda: Título e Descrição */}
                    <div className="md:w-1/2 text-left md:pr-12 mb-8 md:mb-0">
                        <h1 className="font-playfair text-5xl font-bold text-[#333333] leading-tight mb-4">
                            Soluções que Criam Novos Caminhos para o seu Negócio
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Explore nossas soluções integradas para otimizar suas operações e impulsionar o crescimento do seu negócio de forma inteligente e intuitiva.
                        </p>
                    </div>
                    {/* Coluna da Direita: Imagem de Destaque */}
                    <div className="md:w-1/2">
                        <img 
                            src="https://via.placeholder.com/600x400" 
                            alt="Soluções TwoTrails" 
                            className="w-full h-auto rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Seção de Cards das Soluções */}
            <section className="bg-white py-20 px-4 md:px-0">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Card da Solução 1: Automação de Atendimento */}
                        <div className="bg-[#e9f3e8] p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-[#6d8d7e] w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                                {/* Placeholder para ícone */}
                                <span className="text-white text-3xl">🤖</span>
                            </div>
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2 text-center">
                                Automação de Atendimento
                            </h3>
                            <p className="text-gray-700 text-center mb-6">
                                Simplifique as interações com seus clientes e automatize tarefas repetitivas para focar no crescimento.
                            </p>
                            <img 
                                src="https://via.placeholder.com/400x200" 
                                alt="Imagem da solução de automação" 
                                className="w-full rounded-xl shadow-md"
                            />
                        </div>

                        {/* Card da Solução 2: Gestão de Projetos */}
                        <div className="bg-[#e9f3e8] p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                             <div className="bg-[#a8795a] w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                                {/* Placeholder para ícone */}
                                <span className="text-white text-3xl">📊</span>
                            </div>
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2 text-center">
                                Gestão de Projetos e Tarefas
                            </h3>
                            <p className="text-gray-700 text-center mb-6">
                                Organize sua equipe e acompanhe o progresso de cada projeto em uma jornada visual e intuitiva.
                            </p>
                            <img 
                                src="https://via.placeholder.com/400x200" 
                                alt="Imagem da solução de gestão" 
                                className="w-full rounded-xl shadow-md"
                            />
                        </div>

                        {/* Card da Solução 3: Análises e Relatórios */}
                        <div className="bg-[#e9f3e8] p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                             <div className="bg-[#6d8d7e] w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                                {/* Placeholder para ícone */}
                                <span className="text-white text-3xl">📈</span>
                            </div>
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2 text-center">
                                Análises e Relatórios
                            </h3>
                            <p className="text-gray-700 text-center mb-6">
                                Tome decisões estratégicas com dados e insights em tempo real, entendendo o verdadeiro caminho do seu sucesso.
                            </p>
                            <img 
                                src="https://via.placeholder.com/400x200" 
                                alt="Imagem da solução de análises" 
                                className="w-full rounded-xl shadow-md"
                            />
                        </div>

                    </div>
                </div>
            </section>
            
        </div>
    );
}
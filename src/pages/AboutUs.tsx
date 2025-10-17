
export function AboutUs (){
    return(
        <section className="bg-[#E9F3E8] min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden">
                
                {/* Formas Orgânicas de Fundo - Posicionamento Corrigido */}
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-[#6D8D7E] rounded-br-[200px]"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#A8795A] rounded-tl-[200px]"></div>
                
                {/* Conteúdo da Página */}
                <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Coluna da Esquerda (Texto de Introdução) */}
                    <div className="flex flex-col justify-center">
                        <h1 className="font-playfair text-5xl font-bold text-[#333333] mb-4">Nossa Jornada: Da ideia à inovação</h1>
                        <p className="text-gray-700 text-lg mb-6">
                            TwoTrails nasceu da ideia de que o caminho menos percorrido é o que leva às maiores descobertas. Inspirada pelo poema de Robert Frost, nossa missão é criar soluções SaaS que desafiem o comum e levem empresas a novas possibilidades.
                        </p>
                        <div className="bg-[#A8795A] text-white px-3 py-1 rounded-full font-bold inline-block"></div>
                    </div>
                    
                    {/* Coluna da Direita (Missão, Visão, Valores) */}
                    <div className="flex flex-col space-y-8">
                        {/* Bloco da Missão */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-2xl mb-2 text-[#333333]">Missão</h3>
                            <p className="text-gray-700 text-lg">Guiar pequenas empresas no caminho da eficiência e do crescimento, oferecendo soluções de automação e atendimento que simplificam a rotina, transformam desafios em oportunidades e liberam o potencial empreendedor.</p>
                        </div>
                        
                        {/* Blocos de Visão e Valores */}
                        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                                <h3 className="font-bold text-2xl mb-2 text-[#333333]">Visão</h3>
                                <p className="text-gray-700 text-lg">Empoderar empreendedores para trilharem novos caminhos de sucesso, transformando a complexidade da gestão em uma jornada simples, intuitiva e gratificante. Nossa visão é ser a bússola confiável que guia o crescimento de pequenos negócios em todo o mundo.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                                <h3 className="font-bold text-2xl mb-2 text-[#333333]">Valores</h3>
                                <p className="text-gray-700 text-lg">Acreditamos que a tecnologia deve ser fácil de usar, como uma trilha bem sinalizada. Nossas soluções são projetadas para simplificar, não para complicar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    );
}

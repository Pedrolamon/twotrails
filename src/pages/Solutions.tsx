export function Solutions() {
    return (
        <div>

            

            <section className="bg-[#e9f3e8] py-20 px-4 md:px-0">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 text-left md:pr-12 mb-8 md:mb-0">
                        <h1 className="font-playfair text-5xl font-bold text-[#333333] leading-tight mb-4">
                            Solutions that Create New Paths for your Business
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Explore our integrated solutions to optimize your operations and drive business growth in a smart and intuitive way.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img 
                            src="https://via.placeholder.com/600x400" 
                            alt="Soluções TwoTrails" 
                            className="w-full h-auto rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </section>


            <section className="bg-white py-20 px-4 md:px-0">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        

                        <div className="bg-[#e9f3e8] p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-[#6d8d7e] w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">

                                <span className="text-white text-3xl">🤖</span>
                            </div>
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2 text-center">
                                Service Automation
                            </h3>
                            <p className="text-gray-700 text-center mb-6">
                                Simplify customer interactions and automate repetitive tasks to focus on growth.
                            </p>
                            <img 
                                src="https://via.placeholder.com/400x200" 
                                alt="Imagem da solução de automação" 
                                className="w-full rounded-xl shadow-md"
                            />
                        </div>


                        <div className="bg-[#e9f3e8] p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                             <div className="bg-[#a8795a] w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">

                                <span className="text-white text-3xl">📊</span>
                            </div>
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2 text-center">
                               Project and Task Management
                            </h3>
                            <p className="text-gray-700 text-center mb-6">
                                Organize your team and track the progress of each project in a visual and intuitive journey.
                            </p>
                            <img 
                                src="https://via.placeholder.com/400x200" 
                                alt="Imagem da solução de gestão" 
                                className="w-full rounded-xl shadow-md"
                            />
                        </div>

                        <div className="bg-[#e9f3e8] p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                             <div className="bg-[#6d8d7e] w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-white text-3xl">📈</span>
                            </div>
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2 text-center">
                                Analysis and Reports
                            </h3>
                            <p className="text-gray-700 text-center mb-6">
                                Make strategic decisions with real-time data and insights, understanding the true path to your success.
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
export function Projects() {
    return (
        <div>
            <section className="bg-[#e9f3e8] min-h-screen py-20 px-4 relative overflow-hidden">
                
                <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[#6d8d7e] rounded-br-[100px] transform rotate-45"></div>
                <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#a8795a] rounded-tl-[100px] transform -rotate-45"></div>
                
                <div className="container mx-auto text-center relative z-10">
                    <p className="text-[#a8795a] font-semibold tracking-widest uppercase mb-2">Projects</p>
                    <h1 className="font-playfair text-5xl font-bold text-[#333333] mb-4">
                        Paths to Success Traced
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
                        See how TwoTrails helped small businesses turn their challenges into success stories and growth.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <img src="https://via.placeholder.com/100" alt="Logo do Cliente" className="mx-auto rounded-full mb-6" />
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2">
                                Success stories
                            </h3>
                            <p className="text-gray-600 mb-4">
                                We implemented a service automation system that increased efficiency by 30%.
                            </p>
                            <a href="#case1" className="bg-[#a8795a] text-white px-6 py-2 rounded-full font-bold inline-block hover:bg-[#8e684a] transition-colors">
                                See Full Case
                            </a>
                        </div>
                        
                        {/* Card do Projeto 2 */}
                        <div className="bg-[#a8795a] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-white">
                            <img src="https://via.placeholder.com/100" alt="Logo do Cliente" className="mx-auto rounded-full mb-6" />
                            <h3 className="font-playfair text-2xl font-bold mb-2">
                                Success stories
                            </h3>
                            <p className="mb-4">
                                Our project management solution reduced delivery time by 40% for this startup.
                            </p>
                            <a href="#case2" className="bg-white text-[#a8795a] px-6 py-2 rounded-full font-bold inline-block hover:bg-gray-100 transition-colors">
                                See Full Case
                            </a>
                        </div>
                        
                        {/* Card do Projeto 3 */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <img src="https://via.placeholder.com/100" alt="Logo do Cliente" className="mx-auto rounded-full mb-6" />
                            <h3 className="font-playfair text-2xl font-bold text-[#333333] mb-2">
                                Success stories
                            </h3>
                            <p className="text-gray-600 mb-4">
                               We optimized workflow and internal communication for this family business.
                            </p>
                            <a href="#case3" className="bg-[#a8795a] text-white px-6 py-2 rounded-full font-bold inline-block hover:bg-[#8e684a] transition-colors">
                                See Full Case
                            </a>
                        </div>
                        
                        {/* Card do Projeto 4 */}
                        <div className="bg-[#6d8d7e] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-white">
                            <img src="https://via.placeholder.com/100" alt="Logo do Cliente" className="mx-auto rounded-full mb-6" />
                            <h3 className="font-playfair text-2xl font-bold mb-2">
                                Success stories
                            </h3>
                            <p className="mb-4">
                                We help startups scale their operations with accurate performance reports.
                            </p>
                            <a href="#case4" className="bg-white text-[#6d8d7e] px-6 py-2 rounded-full font-bold inline-block hover:bg-gray-100 transition-colors">
                               See Full Case
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            

        </div>
    );
}
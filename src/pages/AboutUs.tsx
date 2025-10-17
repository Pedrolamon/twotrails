
export function AboutUs (){
    return(
        <section className="bg-[#E9F3E8] min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-[#6D8D7E] rounded-br-[200px]"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#A8795A] rounded-tl-[200px]"></div>
                <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    
                    <div className="flex flex-col justify-center">
                        <h1 className="font-playfair text-5xl font-bold text-[#333333] mb-4">Our Journey: From Idea to Innovation</h1>
                        <p className="text-gray-700 text-lg mb-6">
                         TwoTrails was born from the idea that the path less traveled leads to the greatest discoveries. Inspired by Robert Frost's poem, our mission is to create SaaS solutions that challenge the ordinary and lead companies to new possibilities.   
                        </p>
                        <div className="bg-[#A8795A] text-white px-3 py-1 rounded-full font-bold inline-block"></div>
                    </div>
                    
                    <div className="flex flex-col space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-2xl mb-2 text-[#333333]">Mission</h3>
                            <p className="text-gray-700 text-lg">Guiding small businesses on the path to efficiency and growth by offering automation and service solutions that simplify routines, transform challenges into opportunities, and unleash entrepreneurial potential.</p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                                <h3 className="font-bold text-2xl mb-2 text-[#333333]">Vision</h3>
                                <p className="text-gray-700 text-lg">Empowering entrepreneurs to forge new paths to success, transforming the complexity of management into a simple, intuitive, and rewarding journey. Our vision is to be the trusted compass guiding the growth of small businesses worldwide.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                                <h3 className="font-bold text-2xl mb-2 text-[#333333]">Values</h3>
                                <p className="text-gray-700 text-lg">We believe technology should be easy to use, like a well-marked trail. Our solutions are designed to simplify, not complicate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    );
}

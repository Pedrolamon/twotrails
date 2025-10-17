//components
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { AboutUs } from "./AboutUs"
import { Contact } from "./Contact"
import { Projects } from "./Projects"
import { Solutions } from "./Solutions"

//img
import imgcerta from "../assets/imgcerta.png"


export function Index (){
    return(
        <div>
           <Header/>
           <section className="bg-[#e9f3e8] h-[90vh] flex">
            <div className=" flex-1 flex flex-col justify-center p-16 bg-[#6D8D7E] text-gray-800 relative">
            <div className=" absolute right-0 top-0 bottom-0 w-1/2 bg-[#A8CDB4] rounded-l-[100px] transform translate-x-1/2 "></div>
            <div className="relative z-10 flex items-center space-x-4 mb-4">
                <h1 className=" font-playfair text-6xl font-bold">TwoTrails</h1>
            </div>
            <div className="relative z-10">
                <p className="text-xl mb-4">Choose the path of innovation</p>
                <div className="w-12 h-1 bg-white"></div>
            </div>
            </div> 
              
              <div className="flex-1 relative">
                <img src={imgcerta} alt="imagem da logo" className="absolute inset-0 h-full object-cover rounded-l-[100px]" />
              </div>
           </section>
          <AboutUs/>
          <Solutions/>
          <Projects/>
          <Contact/>
        <Footer/>
        </div>
    )
}
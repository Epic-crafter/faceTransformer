import Section1 from "./section1"
import Section2 from "./section2"
import Footer from "../home-page/components/Footer";
import Navbar from "../home-page/components/Navbar";



export default function Home() {
  return (
    <div>
              <Navbar />
              

    <Section1/>
    <Section2/>
    {/* <Section2/> */}
    
    </div>
  );
}

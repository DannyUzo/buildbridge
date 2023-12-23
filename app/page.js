import { Footer, Navbar } from "../components";
import {
  About,
  Contact,
  Internships,
  Hero,
  Blog,
  Products,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black relative overflow-hidden flex flex-col gap-y-10">
    <div className="fixed mt-0 z-[99999] w-full"> 
    <Navbar />
    </div>
    <div className="relative mt-28">
      <Hero />
    </div>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      {/* <Products/> */}
    </div>
    <div className="relative">
      <Internships />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      {/* <Blog /> */}
      <div className="gradient-04 z-0" />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Page;

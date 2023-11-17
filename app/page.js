import { Footer, Navbar } from "../components";
import {
  About,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black relative overflow-hidden">
    <div className="fixed mt-0 z-[99999] w-full"> 
    <Navbar />
    </div>
    <div className="relative mt-28">
      <Hero />
    </div>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;

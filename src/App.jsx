import {Route ,Routes} from "react-router-dom";
import { useEffect } from "react";
import "./assets/styles/main.scss";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Team from "./pages/Team";
import Donation from "./pages/Donation";
import DonationList from "./pages/DonationList.jsx";
import DonationDetails from "./pages/DonationDetails.jsx";
import TeamDetails from "./pages/TeamDetails.jsx";
import Events from "./pages/Events";
import BlogGrid from "./pages/BlogGrid";
import Testimonial from "./pages/Testimonial";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Gallery from "./pages/Gallery";
import PageNotFound from "./pages/PagenotFound";
import BlogClassic from "./pages/Blogclassic";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";



const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
    <ScrollToTop />
    <Navbar />
    <div className="w-full pt-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donation-list" element={<DonationList />} />
        <Route path="/donation-details" element={<DonationDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-classic" element={<BlogClassic />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </div>
  )
}

export default App

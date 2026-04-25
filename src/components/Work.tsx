import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "Film Rental Store",
    category: "Backend API",
    tools: "Java 17, Spring Boot, Spring Data JPA, MySQL, Thymeleaf, JUnit 5, Swagger",
    highlights: [
      "Production-grade REST API with 16 controllers & 50+ endpoints",
      "Modules: Films, Actors, Customers, Rentals, Payments, Inventory",
      "Pagination, sorting, analytics with JPQL & native SQL",
      "High test coverage with JUnit + Mockito",
    ],
    link: "https://github.com/mayank679",
    image: "/images/film_rental.png",
  },
  {
    title: "JARVIS – AI Assistant",
    category: "AI / Desktop App",
    tools: "Python, JavaScript, HTML, CSS, Gemini API",
    highlights: [
      "Desktop assistant with face recognition login",
      "File & application control system",
      "AI chatbot integration",
    ],
    link: "https://jarvis-web-gp4c.onrender.com/",
    image: "/images/jarvis_ai.png",
  },
  {
    title: "E-Commerce Web App",
    category: "Frontend / Web",
    tools: "HTML, CSS, JavaScript",
    highlights: [
      "Responsive UI with product listings",
      "Shopping cart and checkout system",
      "Focus on UX and accessibility",
    ],
    link: "https://e-commerce-website-nu-orcin.vercel.app/",
    image: "/images/ecommerce.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    });

    // Clean up
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tech Stack</h4>
                <p>{project.tools}</p>
                <div className="work-highlights">
                  <ul>
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

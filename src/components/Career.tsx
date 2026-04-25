import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Backend Developer Trainee</h4>
                <h5>Capgemini, Kolkata</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed 3-month backend training in Core Java, OOP, JDBC,
              JPA/Hibernate, Spring Boot, REST APIs, PostgreSQL, and DevOps.
              Built Film Rental Store Management System with 16 controllers &
              50+ endpoints using layered architecture, DTOs, and Swagger
              documentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>IEM, Kolkata</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing B.Tech CSE (2022–2026) with a CGPA of 8.75/10. Focused on
              Data Structures & Algorithms, DBMS, Operating Systems, and
              Object-Oriented Programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII – CBSE Science</h4>
                <h5>Delhi Public School, Bokaro</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed senior secondary education with 86.5% in CBSE Science
              stream (2020–2022). Strong foundation in Mathematics, Physics, and
              Computer Science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

import Banner from "../Layouts/Banner";
import Collapase from "../components/Collapase";

//DATA
import data  from "../data/aboutPageDate";

function About() {
  return (
    <>
      <Banner />
      <section className="about-main">
        {data.map(({id, label, content}) => (
          <Collapase
            key={id}
            label={label}
            content={content}
          />
        )
        )}
      </section>
    </>
  );
}

export default About;

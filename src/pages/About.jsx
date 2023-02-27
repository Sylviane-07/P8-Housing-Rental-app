import Collapase from "../components/Collapase";
import Banner from "../layouts/Banner";

function About() {
  return (
    <>
      <Banner />
      <section className="about-main">
        <Collapase
          label={"Title"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi ut commodi perferendis repellat minima sit expedita perspiciatis! A sed libero unde aspernatur quibusdam voluptatem assumenda dolor enim, facilis ut!"
          }
        />
      </section>
    </>
  );
}

export default About;

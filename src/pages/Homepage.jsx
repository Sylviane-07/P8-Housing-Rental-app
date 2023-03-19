//DATA
import data from "./../data/data.json";
//COMPONENT
import Cards from "../components/Cards";
import Banner from "../Layouts/Banner";

function Homepage() {
  return (
    <>
      <Banner />
      <section className="card">
        {data.map(({ id, cover, title }) => (
          <Cards key={id} cover={cover} title={title} id={id} />
        ))}
      </section>
    </>
  );
}

export default Homepage;

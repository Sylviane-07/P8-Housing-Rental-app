import data from "./../data/data.json";

import Cards from "../components/Cards";
import Banner from "../layouts/Banner";

function Homepage() {
  return (
    <>
      <Banner />
      <section>
        {data.map(({ id, cover, title }) => (
          <Cards key={id} cover={cover} title={title} />
        ))}
      </section>
    </>
  );
}

export default Homepage;

import data from "./../data/data.json"

function Cards() {
    return (
      <section className="homepage-cards">
        {data.map((item) => (
          <article key={item.id} className="homepage-cards__item homepage-cards__item--title">
            <img src={item.cover} alt= {item.title} className= "homepage-cards__img" />
            <h3 className= "homepage-cards__title">{item.title}</h3>
          </article>
        ))}
      </section>
    );
}

export default Cards

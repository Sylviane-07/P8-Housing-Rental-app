function Cards({id, cover, title}) {
    return (
          <article key={id} className="homepage-cards__item homepage-cards__item--title">
            <img src={cover} alt= {title} className= "homepage-cards__img" />
            <h3 className= "homepage-cards__title">{title}</h3>
          </article>
        )
}

export default Cards

function Cards({id, cover, title}) {
    return (
          <article key={id} className="card__item">
            <img src={cover} alt= {title} className= "card__img" />
            <h3 className= "card__title">{title}</h3>
          </article>
        )
}

export default Cards

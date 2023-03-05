function StarsRating({count, value}) {
  // create array based on count value which returns stars based on count/array.length
  const stars = Array.from({ length: count }, () => (
    <i className="fa-solid fa-star"></i>
  ));
  //console.log(stars)

  //Inline stars style color properties
  const inactiveColor = { color: `#E3E3E3` };
  const activeColor = { color: `#FF6060` };
  return (
    <div>
      {stars.map((star, index) =>{
        //console.log(value);
        let starStyle = {}
        //if index < to rating value => activeColor
        index < value ? (starStyle = activeColor) : (starStyle = inactiveColor);
        return (
          <span
            className="rating-stars"
            key={index}
            style={starStyle}
          >{star}</span>
        );
      })}
    </div>
  );
}

export default StarsRating
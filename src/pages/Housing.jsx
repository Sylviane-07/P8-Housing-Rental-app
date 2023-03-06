import { useParams } from "react-router-dom";
//COMPONENTS
import Slideshow from "./../components/Slideshow";
import Property404 from "./../components/Property404";
import Collapase from "../components/Collapase";

//DATA import
import propertyData from "./../data/data.json";
import StarsRating from "../components/StarsRating";
import HostId from "../components/HostId";
import Tags from "../components/Tags";

function Housing() {
  // ID from URL with useParams
  const { propertyId } = useParams();
  // Watch for matching for ID params & ID data
  const property = propertyData.find((property) => property.id === propertyId);

  //change rating value from string to number
  const rating = property.rating * 1;
  //console.log(property);
  //console.log(typeof rating);
  //console.log(property.tags);
  return !property ? (
    <Property404 />
  ) : (
    <>
      <Slideshow pictures={property.pictures} />
      <section className="housing-details">
        <article>
          <div>
            <h1>{property.title}</h1>
            <p>{property.location}</p>
            {/* tags container */}
            <div className="tags__container">
              {property.tags.map(( tag, index ) => (
                <Tags key={index} tag={tag} />
              ))}
            </div>
          </div>
          {/* stars & host container */}
          <div>
            {/* stars container */}
            <StarsRating count={5} value={rating} />
            {/* host container */}
            <HostId name={property.host.name} picture={property.host.picture} />
          </div>
        </article>
        <article>
          <Collapase label={`Description`} content={property.description} />
          <Collapase label={`Équipements`} content={property.equipments} />
        </article>
      </section>
    </>
  );
}

export default Housing;

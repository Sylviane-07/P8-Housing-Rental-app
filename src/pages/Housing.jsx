import { useParams } from "react-router-dom";
//DATA import
import propertyData from "./../data/data.json";
//COMPONENTS
import Slideshow from "./../components/Slideshow";
import Property404 from "./../components/Property404";
import Collapase from "../components/Collapase";
import StarsRating from "../components/StarsRating";
import HostId from "../components/HostId";
import Tags from "../components/Tags";

function Housing() {
  // ID from URL with useParams
  const { propertyId } = useParams();
  // Watch for matching for ID params & ID data
  const property = propertyData.find((property) => property.id === propertyId);
 
  //console.log(property);
 
  return !property ? (
    <Property404 />
  ) : (
    <>
      <Slideshow pictures={property.pictures} />
      <section className="housing-page">
        <article className="housing-page__details-container">
          <div className="housing-page__title-loc-tags-container">
            <h1 className="housing-page__title">{property.title}</h1>
            <p className="housing-page__location">{property.location}</p>
            {/* tags container */}
            <div className="housing-page__tags-container">
              {property.tags.map((tag, index) => (
                <Tags key={index} tag={tag} />
              ))}
            </div>
          </div>
          {/* stars & host container */}
          <div className="housing-page__rating-host-container">
            {/* stars container */}
            <StarsRating count={5} value={Number(property.rating)} />
            {/* host container */}
            <HostId name={property.host.name} picture={property.host.picture} />
          </div>
        </article>
        <article className="housing-page__collapse-container">
          <Collapase label={`Description`} content={property.description} />
          <Collapase
            label={`Équipements`}
            //map in prop.list over property.equipments to return a list of each equipment in Collapse <p></p>
            list={property.equipments.map((equipment, index) => (
              <span className="housing-page__collapse-list" key={index}>
                {equipment}
              </span>
            ))}
          />
        </article>
      </section>
    </>
  );
}

export default Housing;

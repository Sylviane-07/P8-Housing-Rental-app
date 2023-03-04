import { useParams } from "react-router-dom";
//COMPONENTS
import Slideshow from "./../components/Slideshow";
import Property404 from "./../components/Property404";
//DATA import
import propertyData from "./../data/data.json";

function Housing() {
  // ID from URL with useParams
  const { propertyId } = useParams();
  // Watch for matching for ID params & ID data
  const property = propertyData.find((property) => property.id === propertyId);

  console.log(property);

  return !property ? (
    <Property404 />
  ) : (
    <>
      <Slideshow pictures={property.pictures} />
      <section>
        <h1>housing {propertyId}</h1>
      </section>
    </>
  );
}

export default Housing;

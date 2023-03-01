import Slideshow from "./../components/Slideshow";
import Property404 from "./../components/Property404"
import { useParams } from "react-router-dom";
import propertyData from "./../data/data.json";

function Housing() {
  const { propertyId } = useParams();
  const property = propertyData.find((property) => property.id === propertyId);

  console.log(property);
    return !property ? (
      <Property404 />
    ) : (
      <>
        <h1>housing {propertyId}</h1>
        <Slideshow />
      </>
    );

}

export default Housing;

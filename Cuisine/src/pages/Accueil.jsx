import Header from "../components/commons/Header"
import Sections from "../components/commons/CategorieSection"
import PopularDishes from "../components/commons/SectionPlatpopulaire";
import Restau from "../components/commons/SectionRestaurant";
import AuDelaAssiette from "../components/commons/SectionAudela";
import HowItWorks from "../components/commons/HowItWorks";
import Témoignages from "../components/commons/Temoignages";
export default function Accueil (){
  return(
  <>
    <Header />
    <Sections />
    <PopularDishes />
    <Restau />
    <AuDelaAssiette />
    <HowItWorks />
    <Témoignages />
    

  </>
);
}
import TitleDateRate from "./info/TitleDateRate";
import Languages from "./info/Languages";
import Categories from "./info/Categories";
import AdultWarning from "./info/AdultWarning";
import Overview from "./info/Overview";
import ProductionCompanies from "./info/ProductionCompanies";
import Cast from "./info/Cast";

const DetailInformation = () => {
  return (
    <div className="flex flex-col gap-8 col-span-3">
      <TitleDateRate />
      <Languages />
      <Categories />
      <AdultWarning />
      <Overview />
      <ProductionCompanies />
      <Cast />
    </div>
  );
};

export default DetailInformation;

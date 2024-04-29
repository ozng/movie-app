import TitleDateRate from "./info/TitleDateRate";
import Languages from "./info/Languages";
import Categories from "./info/Categories";
import AdultWarning from "./info/AdultWarning";
import Overview from "./info/Overview";
import Cast from "./info/Cast";
import Media from "./info/Media";

const DetailInformation = () => {
  return (
    <div className="flex flex-col gap-8 col-span-3">
      <TitleDateRate />
      <Languages />
      <Categories />
      <AdultWarning />
      <Overview />
      <Media />
      <Cast />
    </div>
  );
};

export default DetailInformation;

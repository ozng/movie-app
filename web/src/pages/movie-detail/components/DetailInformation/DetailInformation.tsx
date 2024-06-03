import AdultWarning from "./components/AdultWarning/AdultWarning";
import Cast from "./components/Cast/Cast";
import Categories from "./components/Categories/Categories";
import Languages from "./components/Languages/Languages";
import Media from "./components/Media/Media";
import Overview from "./components/Overview/Overview";
import TitleDateRate from "./components/TitleDateRate/TitleDateRate";

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

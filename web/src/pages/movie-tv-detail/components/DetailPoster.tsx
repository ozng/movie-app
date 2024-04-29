import Poster from "./poster/Poster";
import Links from "./poster/Links";
import Buttons from "./poster/Buttons";
import BudgetAndRevenue from "./poster/BudgetAndRevenue";
import ProductionCompanies from "./info/ProductionCompanies";

const DetailPoster = () => {
  return (
    <div className="flex flex-col gap-4">
      <Poster />
      <Links />
      <Buttons />
      <BudgetAndRevenue />
      <ProductionCompanies />
    </div>
  );
};

export default DetailPoster;

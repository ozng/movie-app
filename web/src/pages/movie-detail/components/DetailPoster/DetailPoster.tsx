import ProductionCompanies from "@/pages/movie-detail/components/DetailInformation/components/ProductionCompanies/ProductionCompanies";
import BudgetAndRevenue from "./components/BudgetAndRevenue/BudgetAndRevenue";
import Buttons from "./components/Buttons/Buttons";
import Links from "./components/Links/Links";
import Poster from "./components/Poster/Poster";

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

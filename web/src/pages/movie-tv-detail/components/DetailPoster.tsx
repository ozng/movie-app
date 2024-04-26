import Poster from "./poster/Poster";
import Links from "./poster/Links";
import Buttons from "./poster/Buttons";
import BudgetAndRevenue from "./poster/BudgetAndRevenue";

const DetailPoster = () => {
  return (
    <div className="flex flex-col gap-4">
      <Poster />
      <Links />
      <Buttons />
      <BudgetAndRevenue />
    </div>
  );
};

export default DetailPoster;

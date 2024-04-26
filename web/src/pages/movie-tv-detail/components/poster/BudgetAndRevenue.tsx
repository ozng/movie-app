import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { formatNumber } from "@/utils/format";
import { useSelector } from "react-redux";

const BudgetAndRevenue = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return movieDetail ? (
    <div className="flex flex-col">
      <div className="grid grid-cols-2">
        <Type size={"sm"} thickness={"semibold"}>
          Budget
        </Type>
        <Type size={"sm"}> ${formatNumber(movieDetail.budget)}</Type>
      </div>
      <div className="grid grid-cols-2">
        <Type size={"sm"} thickness={"semibold"}>
          Revenue
        </Type>
        <Type size={"sm"}> ${formatNumber(movieDetail.revenue)}</Type>
      </div>
    </div>
  ) : null;
};

export default BudgetAndRevenue;

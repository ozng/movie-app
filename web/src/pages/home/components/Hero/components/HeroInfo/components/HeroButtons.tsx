import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type HeroButtonsProps = {
  movieID: string;
};

const HeroButtons = ({ movieID }: HeroButtonsProps) => {
  return (
    <div className="flex gap-6">
      <Link to={`/detail/${movieID}`}>
        <Button>Detail</Button>
      </Link>
    </div>
  );
};

export default HeroButtons;

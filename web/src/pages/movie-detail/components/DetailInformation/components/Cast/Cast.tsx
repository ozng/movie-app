import { Separator } from "@/components/ui/separator";
import { Type } from "@/components/ui/typography/type";
import useCast from "./hooks/useCast";
import DirectorList from "./components/Director/DirectorList";
import CastList from "./components/Cast/CastList";

const Cast = () => {
  const { director } = useCast();

  return (
    <div className="flex flex-col gap-4">
      <Type thickness={"bold"}>Cast</Type>
      <div className="flex flex-col gap-4">
        <DirectorList director={director} />
        <Separator />
        <CastList />
      </div>
    </div>
  );
};

export default Cast;

import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="flex gap-4">
      <Button className="w-full">Trailer</Button>
      <Button className="w-full" variant={"outline"}>
        Pictures
      </Button>
    </div>
  );
};

export default Buttons;

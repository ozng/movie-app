import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="flex gap-4">
      <Button className="w-full">Images</Button>
      <Button className="w-full" variant={"outline"}>
        Videos
      </Button>
    </div>
  );
};

export default Buttons;

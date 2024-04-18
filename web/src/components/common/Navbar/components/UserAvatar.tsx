import { Type } from "@/components/ui/typography/type";

const UserAvatar = () => {
  return (
    <div className="cursor-pointer bg-accent hover:bg-accent/90 duration-75 size-10 flex items-center justify-center rounded-full">
      <Type variant={"light"} thickness={"bold"} size={"lg"}>
        O
      </Type>
    </div>
  );
};

export default UserAvatar;

import { Separator } from "./ui/seperator";

const PageTitleDivider = ({ title }: { title: string }) => {
  return (
    <div className="w-screen flex items-center gap-4 justify-center py-6">
      <Separator />
      <h3>{title}</h3>
      <Separator />
    </div>
  );
};

export default PageTitleDivider;

import { Separator } from "./ui/seperator";

const PageTitleDivider = ({ title }: { title: string }) => {
  return (
    <div className="w-4/5 overflow-x-hidden flex items-center gap-4 justify-center py-6">
      <Separator />
      <h3 className="whitespace-nowrap">{title}</h3>
      <Separator />
    </div>
  );
};

export default PageTitleDivider;

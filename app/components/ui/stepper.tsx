import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "./button";

interface IProps {
  amount: number;
  onSubtract: () => void;
  onAdd: () => void;
}

const Stepper = ({ amount, onSubtract, onAdd }: IProps) => {
  return (
    <div className="flex items-center gap-1 border w-fit rounded-full ">
      <Button size="sm">
        <FaMinus onClick={onSubtract} />
      </Button>
      {amount}
      <Button size="sm">
        <FaPlus onClick={onAdd} />
      </Button>
    </div>
  );
};

export default Stepper;

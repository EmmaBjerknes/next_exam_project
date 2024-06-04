import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "./button";

interface IProps {
  amount: number;
  onSubtract: () => void;
  onAdd: () => void;
}

const Stepper = ({ amount, onSubtract, onAdd }: IProps) => {
  return (
    <div className="flex items-center gap-1 w-fit rounded-full ">
      <Button size="sm" variant="stepper" onClick={onSubtract}>
        <FaMinus />
      </Button>
      {amount}
      <Button size="sm" variant="stepper" onClick={onAdd}>
        <FaPlus />
      </Button>
    </div>
  );
};

export default Stepper;

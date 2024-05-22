import { Button } from "./ui/button";

interface IProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertDialog = ({ message, onConfirm, onCancel }: IProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>{message}</p>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant={"confirm"} onClick={onConfirm}>
            Bekräfta
          </Button>
          <Button variant={"cancel"} onClick={onCancel}>
            Avbryt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;

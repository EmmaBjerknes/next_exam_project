import { SyncLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="mt-6">
      <SyncLoader color="#571987" margin={5} size={15} speedMultiplier={1} />
    </div>
  );
};

export default Spinner;

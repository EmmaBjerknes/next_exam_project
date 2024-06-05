const pageNames: { [key: string]: string } = {
  "cart/delivery": "Leverans",
  "cart/customerInformation": "Uppgifter",
  "cart/payment": "Betalning",
  "cart/summary": "Översikt",
};

const getPageSteps = (currentPage: string) => {
  const allPages = Object.keys(pageNames);

  return allPages.map((page) => ({
    name: pageNames[page],
    active: page === currentPage,
    activeColor: page === currentPage ? "text-primary" : "text-black",
    inactiveColor: page === currentPage ? "text-primary" : "text-gray-500",
  }));
};

const ProgressBar = ({ currentPage }: { currentPage: string }) => {
  const steps = getPageSteps(currentPage);

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex items-baseline gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                step.active ? "bg-primary" : "bg-gray-400"
              }`}
            ></div>
            <span
              className={`text-sm font-medium ${
                step.active ? step.activeColor : step.inactiveColor
              }`}
            >
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

const Heading = ({ title, subTitle }) => {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">{title}</h1>
      <p className="text-md font-medium opacity-70">{subTitle}</p>
    </div>
  );
};

export default Heading;

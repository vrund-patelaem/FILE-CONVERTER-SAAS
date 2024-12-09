const Category = ({ text, color }) => {
  return (
    <div
      className={`text-black bg-white text-xs font-inter font-medium w-fit px-2 py-1 rounded-md`}
    >
      {text}
    </div>
  );
};

export default Category;

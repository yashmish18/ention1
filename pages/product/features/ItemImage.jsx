export const ItemImage = (props) => {
  const { img, text, label } = props;
  return (
    <div className="flex items-center justify-center relative text-white font-normal rounded-3xl overflow-hidden">
      <img src={img.src} alt="analog-img" className="w-[560px] h-auto" />
      {label}
      {/* <p className={`absolute text-center ${cn}`}>{text}</p> */}
    </div>
  );
};

import Image from 'next/image';

const FALLBACK_IMG = '/assets/0N1A1389.png'; // Use a default image that exists in public/assets

const ItemImage = (props) => {
  const { img, text, label } = props;
  const safeImg = img || FALLBACK_IMG;
  return (
    <div className="flex items-center justify-center relative text-white font-normal rounded-3xl overflow-hidden">
      {safeImg ? (
        <Image src={safeImg} alt="analog-img" className="w-[560px] h-auto" width={560} height={400} loading="lazy" />
      ) : null}
      {label}
      {/* <p className={`absolute text-center ${cn}`}>{text}</p> */}
    </div>
  );
};
export default ItemImage;
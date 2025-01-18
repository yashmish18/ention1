const ProcessorCard = (props) => {
  const { img, title, content } = props;
  return (
    <div
      className="rounded-3xl flex flex-col w-full sm:w-[380px] md:w-[320px] lg:w-[380px] z-[3]"
      style={{ background: 'rgba(255, 255, 255, 0.2)' }}
    >
      <div className="w-full sm:w-[380px] md:w-full h-[240px] min-[480px]:h-[320px] md:h-[240px] lg:h-[300px] flex justify-center items-end">
        <img src={img.src} alt="processor-img" className="w-[70%] h-auto" />
      </div>
      <div
        className="flex flex-col gap-3 w-full h-[180px] min-[420px]:h-[215px] md:h-[180px] lg:h-[215px] p-6 rounded-tl-none rounded-tr-none rounded-b-3xl rounded-br-3xl]"
        style={{
          background:
            'linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2)',
        }}
      >
        <p className="text-black text-xl min-[420px]:text-2xl md:text-xl lg:text-2xl">
          {title}
        </p>
        <p className="text-black text-sm min-[420px]:text-base md:text-sm lg:text-base">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProcessorCard;

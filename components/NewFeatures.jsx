import styles from '../styles';

// Please what does this mean,it's seems like you didn't use the conponent
const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[22px] leading-[30px] text-white">
      Title: {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[16px] leading-[32x] text-[#b0b0b0] text-white]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;

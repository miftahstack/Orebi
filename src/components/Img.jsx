const Img = ({ src, alt, className }) => {
  return <img className={`${className}`} src={src} alt={alt} />;
};

export default Img;

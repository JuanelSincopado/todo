interface Props {
  className: string;
  src: string;
}

const CardButtons = ({ className, src }: Props) => {
  return (
    <button className={className}>
      <img src={src} alt={className} />
    </button>
  );
};

export default CardButtons;

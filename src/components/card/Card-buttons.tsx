interface Props {
  id: number;
  className: string;
  src: string;
  onClick: () => void;
}

const CardButtons = ({ id, onClick, className, src }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      <img src={src} alt={className} onClick={onClick} />
    </button>
  );
};

export default CardButtons;

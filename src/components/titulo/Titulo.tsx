interface Props {
  text: string;
}

const Titulo = ({ text }: Props) => {
  return <h1 className="titulo">{text}</h1>;
};

export default Titulo;

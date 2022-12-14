interface Props {
  edit: boolean;
}

const Button = ({ edit }: Props) => {
  return (
    <button type="submit" className="button__add">
      {edit ? "Editar tarea" : "Crear tarea"}
    </button>
  );
};

export default Button;

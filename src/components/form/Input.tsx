interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, onChange }: Props) => {
  return (
    <div className="input">
      <img src="icon/task.svg" alt="task" />
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default Input;

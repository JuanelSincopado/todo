interface Props {
  placeholder: string;
  value: string;
  edit: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cancelEdit: () => void;
}

const Input = ({ placeholder, value, edit, onChange, cancelEdit }: Props) => {
  return (
    <div className="input">
      <img src="icon/task.svg" alt="task" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {edit && (
        <button
          type="button"
          className="button__cancel delete"
          onClick={() => cancelEdit()}
        >
          <img src="icon/times.svg" alt="cancel" />
        </button>
      )}
    </div>
  );
};

export default Input;

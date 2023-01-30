import { Input } from './Input';

export function FormData({
  name, text, typeOfInput, inputText, value, max, min, error, onChange,
}) {
  return (
    <div className="form__data__card">
      <div>{text}</div>
      <div className="input__container">
        <Input
          type={typeOfInput}
          name={name}
          inputText={inputText}
          value={value}
          max={max}
          min={min}
          error={error}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

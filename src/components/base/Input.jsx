import {
  Switch, Select, Radio, Checkbox,
} from 'antd';

export function Input({
  value, type = 'text', name, error, inputText, onChange,
}) {
  return ((type === 'checkbox') ? (
    <>
      <Checkbox
        name={name}
        className={`input__${type}`}
        type={type}
        checked={value}
        onChange={(e) => onChange(e, name)}
      />
      <Switch
        defaultChecked
        checked={value}
        name={name}
        className={`input__${type}__mobile`}
        onChange={(e) => onChange(e, name)}
      />
    </>
  ) : (type === 'radio')
    ? (
      <>
        <Radio.Group
          name={name}
          value={value}
          className={`input__${type}`}
          onChange={(e) => onChange(e, name)}
        >
          {inputText.map((el) => <Radio key={el.value} id={el.value} value={el.value}>{el.label}</Radio>)}

        </Radio.Group>
        <Select
          defaultValue={inputText[0]}
          name={name}
          className={`input__${type}__mobile`}
          options={inputText}
          onChange={(e) => onChange(e, name)}
        />
      </>
    ) : (
      <div className={error ? 'input__error' : ''}>
        <input
          className={`input__${type}`}
          name={name}
          value={value}
          type={type}
          onChange={(e) => onChange(e, name)}
        />
        <span className="input__error__message">{error}</span>
      </div>
    )
  );
}

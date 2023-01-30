export function Button({ text, className, onClick }) {
  return (
    <button className={className} type="button" onClick={onClick}>{text}</button>
  );
}

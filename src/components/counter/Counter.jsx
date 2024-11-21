export const Counter = ({value, onChange}) => {
  const decrease = () => {
    onChange(value - 1);
  };

  const increase = () => {
    onChange(value + 1);
  };

  return (
    <>
      <button type="button" onClick={decrease}>-</button>
      {value}
      <button type="button" onClick={increase}>+</button>
    </>
  );
}
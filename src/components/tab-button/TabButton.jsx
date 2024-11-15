export const TabButton = ({isActive, children, onClick}) => {
  return (
    <button
      style={{
        color: 'brown',
        textDecoration: isActive ? 'underline' : 'none',
        cursor: 'pointer',
        marginRight: '10px'
      }}
      onClick={onClick}>
      {children}
    </button>
  );
}
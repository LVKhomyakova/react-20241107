import classes from './Input.module.css';

export const Input = ({type = 'text', ...props}) => {
  return (
    <>
      {type === "text" && <input className={classes.input} {...props}/>}
      {type === "textarea" && <textarea className={classes.input} {...props}></textarea>}
    </>
  );
}
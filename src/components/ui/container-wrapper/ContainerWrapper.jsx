import classes from "./ContainerWrapper.module.css";
import classNames from 'classnames';

// type: 'default' | 'primary';

export const ContainerWrapper = ({type, children}) => {
  return (
    <section className={classNames(classes.wrapper, type === 'primary' && classes.primary)}>
      {children}
    </section>
  );
}
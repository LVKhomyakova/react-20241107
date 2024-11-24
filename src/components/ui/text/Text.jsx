import classNames from "classnames";
import classes from "./Text.module.css"

// type: default | title | subtitle | h1 | h2 | h3
const HEADERS = ['h1', 'h2', 'h3'];

export const Text = ({children, type='default', color = 'default'}) => {
  const TextTag = HEADERS.includes(type) ? type : 'span';

  return (
    <TextTag className={classNames({
      [classes.default]: type === 'default',
      [classes.title]: type === 'title',
      [classes.subtitle]: type === 'subtitle',
      [classes.h1]: type === 'h1',
      [classes.h2]: type === 'h2',
      [classes.h3]: type === 'h3',

      [classes.gray]: color === 'default',
      [classes.primary]: color === 'primary',
      [classes.dark]: color === 'dark',
      [classes.light]: color === 'light',
    })}>
      {children}
    </TextTag>
  );
}
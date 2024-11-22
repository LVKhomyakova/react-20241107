import classNames from "classnames";
import classes from "./Text.module.css"

export const Text = ({children, type='default', color = 'default'}) => {
  return (
    <span className={classNames({
      [classes.default]: type === 'default',
      [classes.title]: type === 'title',
      [classes.subtitle]: type === 'subtitle',

      [classes.gray]: color === 'default',
      [classes.primary]: color === 'primary',
      [classes.dark]: color === 'dark',
      [classes.light]: color === 'light',
    })}>
      {children}
    </span>
  )
}
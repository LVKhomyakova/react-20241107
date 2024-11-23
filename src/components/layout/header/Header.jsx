import classes from './Header.module.css'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <h1>Restaurant service</h1>
      </div>
    </header>
  )
}
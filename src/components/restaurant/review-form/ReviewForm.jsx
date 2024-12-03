import { useReviewForm } from "./useReviewForm.jsx";
import { Counter } from "../../ui/counter/Counter.jsx";
import { Button } from "../../ui/button/Button.jsx";
import { Input } from "../../ui/input/Input.jsx";
import classes from "./ReviewForm.module.css";
import bgForm from "../../../assets/images/bg-form.png";

export const ReviewForm = () => {
  const {state, setName, setText, setRating, resetForm} = useReviewForm();

  return (
    <div className={classes.formWrapper}>
      <img src={bgForm} alt="фон"/>
      <form className={classes.form}>
        <div className={classes.group}>
          <div className={classes.control}>
            <label htmlFor="name">Имя:</label>
            <Input
              id="name"
              type="text"
              value={state.name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="text">Текст отзыва:</label>
            <Input
              id="text"
              type="textarea"
              value={state.text}
              onChange={e => setText(e.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="rating">Оценка:</label>
            <Counter value={state.rating} onChange={setRating}/>
          </div>
        </div>

        <div>
          <Button onClick={resetForm}>Очистить</Button>
        </div>
      </form>
      <img src={bgForm} alt="фон"/>
    </div>
  )
}

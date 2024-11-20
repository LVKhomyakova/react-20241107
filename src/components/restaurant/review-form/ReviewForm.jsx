import { useReviewForm } from "./useReviewForm.jsx";
import { Counter } from "../../counter/Counter.jsx";

export const ReviewForm = () => {
  const {state, setName, setText, setRating, resetForm} = useReviewForm();

  return (
    <form>
      <div>
        <label htmlFor="name">Имя:</label>
        <input
          id="name"
          type="text"
          value={state.name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="text">Текст отзыва:</label>
        <input
          id="text"
          type="text"
          value={state.text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Оценка:</label>
        <Counter value={state.rating} onChange={setRating}/>
      </div>

      <button type="button" onClick={resetForm}>Очистить</button>
    </form>
  )
}
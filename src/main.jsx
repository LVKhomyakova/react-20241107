import { createRoot } from 'react-dom/client'
import { RESTAURANTS } from "./constants/mock.js";

// with arrays
createRoot(document.getElementById('root')).render(
  RESTAURANTS.map((restaurant) => {
    return <div key={restaurant.id}>
      <h2 style={{color: 'brown'}}>{restaurant.name}</h2>
      <h3>Меню</h3>
      <ul>
        {restaurant.menu.map((menuItem) =>
          (<li key={menuItem.id}>
            <span>{menuItem.name} </span>
            <span>({menuItem.ingredients.join(', ')})</span>
            <span style={{color: 'green'}}> - {menuItem.price}$</span>
          </li>)
        )}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {restaurant.reviews.map((review) =>
          (<li key={review.id}>
            {[1, 2, 3, 4, 5].map((v) =>
              <span key={v} style={{color: v <= review.rating ? 'orange' : 'gray'}}>★</span>
            )}
            <span> - {review.user}: "{review.text}"</span>
          </li>)
        )}
      </ul>
      <hr/>
    </div>
  })
);

// without arrays
// createRoot(document.getElementById('root')).render(
//   <div>
//     <div>
//       <h2 style={{color: 'brown'}}>{RESTAURANTS[0].name}</h2>
//       <h3>Меню</h3>
//       <ul>
//         <li>
//           <span>{RESTAURANTS[0].menu[0].name} </span>
//           <span>({RESTAURANTS[0].menu[0].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[0].menu[0].price}$</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[0].menu[1].name} </span>
//           <span>({RESTAURANTS[0].menu[1].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[0].menu[1].price}$</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[0].menu[2].name} </span>
//           <span>({RESTAURANTS[0].menu[2].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[0].menu[2].price}$</span>
//         </li>
//       </ul>
//       <h3>Отзывы</h3>
//       <ul>
//         <li>
//           <span>{RESTAURANTS[0].reviews[0].rating}</span>
//           <span> - {RESTAURANTS[0].reviews[0].user}: "{RESTAURANTS[0].reviews[0].text}"</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[0].reviews[1].rating}</span>
//           <span> - {RESTAURANTS[0].reviews[1].user}: "{RESTAURANTS[0].reviews[1].text}"</span>
//         </li>
//       </ul>
//     </div>
//     <hr/>
//     <div>
//     <h2 style={{color: 'brown'}}>{RESTAURANTS[1].name}</h2>
//       <h3>Меню</h3>
//       <ul>
//         <li>
//           <span>{RESTAURANTS[1].menu[0].name} </span>
//           <span>({RESTAURANTS[1].menu[0].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[1].menu[0].price}$</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[1].menu[1].name} </span>
//           <span>({RESTAURANTS[1].menu[1].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[1].menu[1].price}$</span>
//         </li>
//       </ul>
//       <h3>Отзывы</h3>
//       <ul>
//         <li>
//           <span>{RESTAURANTS[1].reviews[0].rating}</span>
//           <span> - {RESTAURANTS[1].reviews[0].user}: "{RESTAURANTS[1].reviews[0].text}"</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[1].reviews[1].rating}</span>
//           <span> - {RESTAURANTS[1].reviews[1].user}: "{RESTAURANTS[1].reviews[1].text}"</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[1].reviews[2].rating}</span>
//           <span> - {RESTAURANTS[1].reviews[2].user}: "{RESTAURANTS[1].reviews[2].text}"</span>
//         </li>
//       </ul>
//     </div>
//     <hr/>
//     <div>
//       <h2 style={{color: 'brown'}}>{RESTAURANTS[2].name}</h2>
//       <h3>Меню</h3>
//       <ul>
//         <li>
//           <span>{RESTAURANTS[2].menu[0].name} </span>
//           <span>({RESTAURANTS[2].menu[0].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[2].menu[0].price}$</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[2].menu[1].name} </span>
//           <span>({RESTAURANTS[2].menu[1].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[2].menu[1].price}$</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[2].menu[2].name} </span>
//           <span>({RESTAURANTS[2].menu[2].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[2].menu[2].price}$</span>
//         </li>
//       </ul>
//       <h3>Отзывы</h3>
//       <ul>
//         <li>
//           <span>{RESTAURANTS[2].reviews[0].rating}</span>
//           <span> - {RESTAURANTS[2].reviews[0].user}: "{RESTAURANTS[2].reviews[0].text}"</span>
//         </li>
//       </ul>
//     </div>
//     <hr/>
//     <div>
//       <h2 style={{color: 'brown'}}>{RESTAURANTS[3].name}</h2>
//       <h3>Меню</h3>
//       <ul>
//         <li>
//           <span>{RESTAURANTS[3].menu[0].name} </span>
//           <span>({RESTAURANTS[3].menu[0].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[3].menu[0].price}$</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[3].menu[1].name} </span>
//           <span>({RESTAURANTS[3].menu[1].ingredients.join(', ')})</span>
//           <span style={{color: 'green'}}> - {RESTAURANTS[3].menu[1].price}$</span>
//         </li>
//       </ul>
//       <h3>Отзывы</h3>
//       <ul>
//         <li>
//           <span>{RESTAURANTS[3].reviews[0].rating}</span>
//           <span> - {RESTAURANTS[3].reviews[0].user}: "{RESTAURANTS[3].reviews[0].text}"</span>
//         </li>
//         <li>
//           <span>{RESTAURANTS[3].reviews[1].rating}</span>
//           <span> - {RESTAURANTS[3].reviews[1].user}: "{RESTAURANTS[3].reviews[1].text}"</span>
//         </li>
//       </ul>
//     </div>
//     <hr/>
//   </div>
// )

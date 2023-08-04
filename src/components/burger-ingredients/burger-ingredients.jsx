import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-ingredients.module.css";
import {useState} from "react";
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";



function BurgerIngredients({data}) {
  const tabs = ['Булки', 'Соусы', 'Начинки',]
  const [current, setCurrent] = useState('Булки')
  const bun = data.filter(item => item.type === 'bun')
  const sauce = data.filter(item => item.type === 'sauce')
  const main = data.filter(item => item.type === 'main' )

  return (
    <section className={styles.burgerIngredients}>
      <h1 className="text text_type_main-large pt-10">Соберите бургер</h1>
      <ul className={styles.tab}>
        {
          tabs.map((item, index) => {
            return (
              <li key={index}>
                <Tab value={item} active={current === item} onClick={setCurrent}>
                  {item}
                </Tab>
              </li>
            )
          })

        }
      </ul>

      <div className={`${styles.container} custom-scroll`}>
        <h2 className='text text_type_main-medium pb-6' id={tabs[0]}>{tabs[0]}</h2>
        <ul className={styles.list}>
          {bun.map((item) => (<IngredientItem data={item} key={item._id} />))}
        </ul>
        <h2 className='text text_type_main-medium pb-6' id={tabs[1]}>{tabs[1]}</h2>
        <ul className={styles.list}>
          {sauce.map((item) => (<IngredientItem data={item} key={item._id} />))}
        </ul>
        <h2 className='text text_type_main-medium pb-6' id={tabs[2]}>{tabs[2]}</h2>
        <ul className={styles.list}>
          {main.map((item) => (<IngredientItem data={item} key={item._id} />))}
        </ul>
      </div>
    </section>

  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType).isRequired,
}

export default BurgerIngredients;

import styles from './ingredient-details.module.css'
import { ingredientPropType } from "../../utils/prop-types";

function IngredientDetails({data}) {
  return (
    <section className={styles.ingredientDetails}>
      <h2 className={`${styles.title} text text_type_main-large pl-10`}>Детали ингредиента</h2>
      <img className={styles.image} src={data.image} alt={data.name} />
      <p className="text text_type_main-medium pt-4">{data.name}</p>
      <ul className={`${styles.list} pt-8`}>

        <li className={styles.li}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{data.calories}</p>
        </li>

        <li className={styles.li}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{data.proteins}</p>
        </li>

        <li className={styles.li}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{data.fat}</p>
        </li>

        <li className={styles.li}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</p>
        </li>

      </ul>

    </section>
  )

}

IngredientDetails.propTypes = {
  data: ingredientPropType.isRequired
}

export default IngredientDetails;

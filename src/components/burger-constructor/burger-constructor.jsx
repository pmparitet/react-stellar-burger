import { CurrencyIcon, Button, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";


function BurgerConstructor({data, setVisible}) {
  const bun = data.filter(item => item.type === 'bun')
  const otherIngredients = data.filter(item => item.type !== 'bun')

  return (
    <section className={styles.burgerConstructor}>
      <div className="pl-8">
        <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun[0].name} (верх)`}
            price={bun[0].price}
            thumbnail={bun[0].image}
        />
      </div>
      <ul className={`${styles.list} custom-scroll`}>
        {
          otherIngredients.map((item) => {
            return (
              <li className={styles.li} key={item._id}>
                <DragIcon type="primary"/>
                <ConstructorElement
                    isLocked={false}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
              </li>
            )
          })

        }
      </ul>
      <div className="pl-8">
        <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun[0].name} (низ)`}
            price={bun[0].price}
            thumbnail={bun[0].image}
        />
      </div>
      <div className={`${styles.container} mt-6`}>
        <div className={styles.cost}>
          <p className='text text_type_digits-medium'>610</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={setVisible}>
          Оформить заказ
        </Button>
      </div>
    </section>

  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType).isRequired,
  setVisible: PropTypes.func.isRequired,
}

export default BurgerConstructor;

import styles from './order-details.module.css'
import done from '../../images/done.svg'

function OrderDetails() {
  return (
    <section className={`${styles.orderDetails} pt-20 pb-30`}>
      <p className={`${styles.number} text text_type_digits-large`}>034536</p>
      <p className='text text_type_main-medium pt-8'>идентификатор заказа</p>
      <img className={`${styles.img} pt-15 pb-15`} src={done} alt="Статус заказа" />
      <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive pt-2'>Дождитесь готовности на орбитальной станции</p>
    </section>
);
}

export default OrderDetails;

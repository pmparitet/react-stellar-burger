import { getIngredients } from "../../utils/api";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getIngredients().then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div className={styles.app}>
      	<AppHeader />
        {
          data.length > 0 &&
          <main className={styles.main}>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} setVisible={ () => setVisible(!visible) }/>
          </main>
        }

        <Modal visible={visible} closePopup={ () => setVisible(!visible) }>
          <OrderDetails/>
        </Modal>
    </div>
  );
}

export default App;

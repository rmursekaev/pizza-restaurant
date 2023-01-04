import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Consequatur illo earum delectus eligendi cupiditate
       labore in? Corrupti ipsum facere blanditiis reiciendis quam commodi,
       fugiat in perferendis tempora inventore, illo sit.
       </p>
       <div className={styles.wrapper}>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
       </div>
    </div>
  )
}

export default PizzaList

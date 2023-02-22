import FruitItem from './FruitItem';

import classes from './FruitList.module.css';

export default function FruitList(props) {
  return (
    <ul className={classes.ul}>
      {props.fruits.map((fruit) => {
        return (
          <FruitItem
            key={fruit.id}
            id={fruit.id}
            title={fruit.title}
            image={fruit.image_path}
            price={fruit.price}
            link={`/fruits/${fruit.id}`}
          />
        );
      })}
    </ul>
  );
}

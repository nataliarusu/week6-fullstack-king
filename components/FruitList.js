import FruitItem from './FruitItem';

export default function FruitList(props) {
  //array => [{id, title, ...},{}]
  return props.fruits.map((fruit) => {
    return (
      <FruitItem
        key={fruit.id}
        title={fruit.title}
        image={fruit.image}
        price={fruit.price}
        link={fruit.link} //generated in pages [fruit_id]
      />
    );
  });
}

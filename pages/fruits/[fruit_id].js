import { getAllIds, getFruitById } from '@/model/fruits';
import Fruit from '@/components/Fruit';

export async function getStaticPaths() {
  const arrIds = getAllIds().map((idObj) => ({
    params: {
      fruit_id: idObj.id.toString(),
    },
  }));
  return {
    paths: arrIds,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const fruitId = context.params.fruit_id; //we receive this data when user visit this path, not during the build process
  //fetch data from db for single fruit
  const fruit = getFruitById(fruitId);

  return {
    props: {
      fruitData: fruit,
    },
  };
}

export default function FruitDetail(props) {
  const { fruitData } = props;
  return (
    <Fruit
      id={fruitData.id}
      title={fruitData.title}
      image_path={fruitData.image_path}
      description={fruitData.fruit_description}
      price={fruitData.price}
    />
  );
}

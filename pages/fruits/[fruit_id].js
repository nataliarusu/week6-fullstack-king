import { getAllIds, getFruitById } from '@/model/fruits';
import Fruit from '@/components/Fruit';

export async function getStaticPaths() {
  //generate dynamic
  //shuould return an object with all paths for which this page should be pre-generated

  // trigger db to get all ids of all fruits in db
  const arrIds = getAllIds().map((idObj) => ({
    params: {
      fruit_id: idObj.id.toString(),
    },
  }));

  console.log(arrIds);
  return {
    //paths: arrIds.map(id=>({params:{ furit_id: id.toString()}}))
    paths: arrIds,
    fallback: false,
  };
  //return { paths: [{ params:{ fruit_id: ' ' } },{}], fallback: false}
}

export async function getStaticProps(context) {
  //context holds params object, fruit_id because our file name is [fruit_id]
  const fruitId = context.params.fruit_id; //we receive this data when user visit this path, not during the build process
  console.log(fruitId);
  //fetch data from db for single fruit
  const fruit = getFruitById(fruitId);

  return {
    props: {
      //should have props for each fruit, props built in NextJS
      fruitData: fruit,
    },
  };
}

export default function FruitDetail(props) {
  const { fruitData } = props;
  console.log(fruitData);
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

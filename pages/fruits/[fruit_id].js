//to generate all versions of paths in advance
export async function getStaticPaths() {
    //generate dynamic
    //shuould return an object with all paths for which this page should be pre-generated
  
    // trigger db to get all ids of all fruits in db
    //const arrIds = getAllIds();
    return {
      //paths: arrIds.map(id=>({params:{ furit_id: id.toString()}}))
      paths: [],
      fallbalck: false, //all paths, if user enters path that not in path[], user see 404
      //fallback => tells nextjs if paths contains all supported params of just some of them.
      //fallback:true, means that if user enters a path not in paths[], the req will be send to server and in the server new page will be generated dynamicly
    };
    //return { paths: [{ params:{ fruit_id: ' ' } },{}], fallback: false}
  }
  
  export async function getStaticProps(context) {
    //context holds params object, fruit_id because our file name is [fruit_id]
    const fruitId = context.params.fruit_id; //we receive this data when user visit this path, not during the build process
  
    //fetch data from db for single fruit
    //const fruit = getFruitBy(fruitId)?
  
    return {
      props: {
        //should have props for each fruit, props built in NextJS
        fruitData: {
          //key: value
          //...
        },
        //fruitData: fruit
      },
    };
  }
  
  export default function FruitDetail(props) {
    // return <Fruit title={props.title} .... />
  }
  
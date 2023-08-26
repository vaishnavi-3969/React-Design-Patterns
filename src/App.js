import './App.css';
import { NumberedList } from './NumberedList';
import { RegularList } from './RegularList';
import { SplitScreen } from './SplitScreen';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargeProductListItem } from './product/LargeProductListItem';
import {SmallProductListItem} from './product/SmallProductListItem';

const LeftHandComponent = ({ name }) => {
  return (
    <h1 style={{ backgroundColor: 'green' }}>{name}</h1>
  );
}

const RightHandComponent = ({ message }) => {
  return (
    <h1 style={{ backgroundColor: 'red' }}>{message}</h1>
  );
}

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  }, {
    name: 'Brenda Smith',
    age: 33,
    hairColor: "black",
    hobbies: ['golf', 'mathematics'],
  }, {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde,',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  }
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD Screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-art technology for optimum running",
    rating: 4.9,
  },
]

function App() {
  return (
    <div>
      {/* <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComponent
        name={"Vaishnavi"} />
      <RightHandComponent
        message={"Hello World"} />
    </SplitScreen> */}
      <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={products}
        resourceName={"product"}
        itemComponent={SmallProductListItem}
      />
      <NumberedList
        items={products}
        resourceName={"product"}
        itemComponent={LargeProductListItem}
      />
    </div>
  );
}

export default App;


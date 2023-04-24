import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost';
import React, {useState} from 'react';


const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2021,2,12),
    description: 'Холодильник',
    amout: 999.99
  },
  {
    id: 'c2',
    date: new Date(2021,11,25),
    description: 'MacBook',
    amout: 1254.99
  },
  {
    id: 'c3',
    date: new Date(2021,4,12),
    description: 'Холодильник',
    amout: 49.99
  },
]

const App = () => {
const [costs, setCosts] = useState(INITIAL_COST)

const addCostHandler = (cost) => {
  setCosts(prevCosts => {
    return [cost, ...prevCosts]
  })
}

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
<Costs costs={costs}/>
    </div>
  );
}

export default App;
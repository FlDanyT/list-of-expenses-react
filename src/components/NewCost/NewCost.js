import './NewCost.css'
import CostFrom from './CostFrom'
import React, {useState} from 'react'

const NewCost = (props) =>{
const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDataHandler = (inputCostData) => 
    {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData)
        setIsFormVisible(false)
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }
    let Form
    const cancelCostHandler = () => {
        setIsFormVisible(false)

    }
    if(isFormVisible === true) {
         Form = <div><CostFrom onSaveCostDate={saveCostDataHandler} onCancel={cancelCostHandler}/>
         </div>
    } else {
         Form = <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>
    }

return <div className="new-cost">
{Form}
</div>
}

export default NewCost
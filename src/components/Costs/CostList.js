import ConstItem from './CostItem'
import './CostList.css'

const CostList = (props) => {
    if (props.costs.length === 0) {
        return <h2 className='cost-list__fallback'>В Этом Году Расходов Нет</h2>
    }
    return <ul className='cost-list'>
{props.costs.map((cost) =>(
        <ConstItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amout={cost.amout}
        />))}
    </ul>
}

export default CostList
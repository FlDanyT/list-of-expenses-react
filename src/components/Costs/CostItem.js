// Элимент расхода
import './CostItem.css';
import CostDate from './CostDate'
import Card from '../UI/Card';


const ConstItem = (props) => {


    return (
        <li>
        <Card className='cost-item'>
            <CostDate date={props.date }/>
            <div className='cost-item__descraption'>
                <div className='cost-item__price'>${props.amout}</div>
                <h2>{props.description}</h2>
            </div>
        </Card>
        </li>
    )
}

export default ConstItem

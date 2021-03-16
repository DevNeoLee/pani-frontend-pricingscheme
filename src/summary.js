import { PurchaseContext } from './App';
import { useContext } from 'react';

const Summary = () => {
    const purchaseContext = useContext(PurchaseContext);

    return(
        <div className="summary">
            <div>Total: $ { Math.round((purchaseContext.state.total + Number.EPSILON) * 100) / 100} </div> 
        </div>
    );
}

export default Summary;
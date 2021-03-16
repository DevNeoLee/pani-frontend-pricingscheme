import { useContext, useEffect, useState } from 'react';
import { PurchaseContext } from './App';
import Product from './product';

const Feature = ({ id, name, product, onClick }) => { 
    const purchaseContext = useContext(PurchaseContext);
    const [ selected, setSelected ] = useState(false);
    console.log('selected from \'feature\'', selected);
    return(
            <div key={ id } className="featureproduct">     
            { !product 
                ? 
                <>
                    <input type="checkbox" onClick={ onClick }/>
                    { name }<br/>
                </>
                :
                selected
                    ?
                    <> 
                        <input type="checkbox" onClick={ ()=>{
                            purchaseContext.dispatch({type: "UNSELECT", payload: product});
                            setSelected(!selected);
                            }}/>
                        { name }<br/>
                        <Product id={ product.id } name={ product.name } price={ product.price }/>
                    </>
                    :
                    <> 
                        <input type="checkbox" onClick={ ()=>{
                            purchaseContext.dispatch({type: "SELECT", payload: product});
                            setSelected(!selected);
                            }}/>
                        { name }<br/>
                        <Product id={ product.id } name={ product.name } price={ product.price }/>     
                    </>
            }
            </div>
    )
}

export default Feature;
import { useState } from 'react';
import Feature from './feature';

const Features = ({ id, name, product, subcategories }) => {
    const [ clicked, setClicked ] = useState(false);

    const onClick = () => {
        setClicked(!clicked); 
    }

    return(
        <div className="features">
            <Feature id={ id } name={ name } product={ product } onClick={ onClick} />
            { clicked &&          
            <div>{
                subcategories.map((sub) => {return( 
                <Features key={ sub.id } id={ sub.id } name={ sub.name } product={ sub.product } subcategories={ sub.subcategories }/>
            )})}
            </div>     
            }
        </div>
    );
}

export default Features;
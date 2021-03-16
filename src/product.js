const Product = ({ id, price, name }) => {
    return(
        <div key={ id } className="product">
            <div>{ name } </div>
            <div className="price">${ price }</div>
        </div>
    );
}

export default Product;
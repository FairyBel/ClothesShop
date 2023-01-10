function Clothes({useClothes}){

return(
    <div className="products">
        {useClothes.map((item =>{
            const{id, name, price, image} = item;
          
          return(<div  className='product-card' key={id}>
                <img src={image} width='400px' height='550px' alt='clothes' />
                               
                <div className="product-info">
                    <h3>{id}-{name}</h3>
                    <h4>${price}</h4>
                </div>
            </div>
            )
        }))}
    </div>
)

}
export default Clothes;
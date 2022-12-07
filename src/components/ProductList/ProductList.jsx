import Product from "../Product/Product"
import "./ProductList.css"
import { products } from "../../data"


const ProductList = () => {
  return (
    <div className="pL">
        <div className="pL-texts">
            <h1 className="pL-title">Create & Inspire. It's Dev</h1>
            <p className="pL-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita sunt id soluta, 
                sequi tempore distinctio eius consequatur repellat amet itaque!
            </p>
        </div>
        <div className="pL-lists">
          {products.map((item)=>(
              <Product key={item.id} img={item.img} link={item.link}/>
          ))}
            
        </div>
    </div>
  )
}

export default ProductList
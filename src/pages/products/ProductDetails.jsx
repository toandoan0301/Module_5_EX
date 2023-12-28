import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getProduct} from "../../redux/services/productService.jsx";


const ProductDetails=()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const product = useSelector(({products}) => {
        return products.editProduct;
    })
    useEffect(() => {
        dispatch(getProduct(id))
    }, []);

    return (
        <><div>
            <h2  className={'text-center text-success'}> Thông Tin Sản Phẩm </h2>
            <div className={'row d-flex justify-content-center'}>
                <div className="card col-6">
                    <div className="card-header">
                        <h5 className={'card-title'}>{product.title}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{product.price}</p>
                        <Link to={'/products/home'} ><button className="btn btn-primary">Quay Lại</button></Link>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default ProductDetails;
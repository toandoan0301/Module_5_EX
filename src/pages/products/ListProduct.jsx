import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAll, remove} from "../../redux/services/productService.jsx";
import {Link} from "react-router-dom";

const ListProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector(({products}) => {
        return products.list;
    })
    const message = useSelector(({products}) => {
        return products.message;
    })
    const handleRemove=(id)=>{
        let isConfirmed = window.confirm('Bạn có chắc muốn xóa sản phẩm này không');
        if(isConfirmed){
        dispatch(remove(id)).then(() =>dispatch(getAll()))
        }
    }
    useEffect(() => {
        dispatch(getAll())
    }, []);
    return (
        <><div className={'container'}>
            <h2 className={'text-center text-success'}>List Products</h2>
            {message && (<div className="alert alert-success" role="alert">
                {message}
            </div>)}
            <table className={'table table-striped'}>
                <thead>
                <tr className={'table-primary'}>
                    <td>#</td>
                    <td>Tên Sản Phẩm</td>
                    <td>Mô tả</td>
                    <td>Giá</td>
                    <td> </td>
                </tr>
                </thead>
                <tbody>
                {products.map((item, index) =>
                    <tr  key={item.id}>
                        <td>{index + 1}</td>
                        <td><Link to={`/products/details/${item.id}`}>{item.title}</Link></td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td className={'md-3 d-flex justify-content-evenly'}>
                            <Link to={`/products/edit/${item.id}`}><button className={'btn btn-info'}>Sửa</button></Link>
                            <button className={'btn btn-danger'} onClick={()=>handleRemove(item.id)}>Xóa</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default ListProduct;
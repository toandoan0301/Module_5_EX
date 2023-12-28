import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {edit, getProduct} from "../../redux/services/productService.jsx";

const EditProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const product = useSelector(({products}) => {
        return products.editProduct;
    })
    useEffect(() => {
        dispatch(getProduct(id))
    }, []);
    const update = (values) => {
        dispatch(edit(values)).then(() => navigate("/products/home"))
    }
    return (
        <>
        <div className={'row d-flex justify-content-center'}>
            <div className="card col-6">
            <h2  className={'text-center text-success p-2'}> Sửa Sản Phẩm </h2>
            <Formik initialValues={
                product
            }
                    enableReinitialize={true}
                    onSubmit={update}
            >
                <Form className={"container"}>
                    <Field className={"form-control"} name={"title"} placeholder={"Tên sản phẩm"} type={'text'}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'title'}/></span><br/>
                    <Field className={"form-control"} name={"description"} placeholder={"Mô tả"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'description'}/></span><br/>
                    <Field className={"form-control"} name={"price"} placeholder={"Giá"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'price'}/></span><br/>
                    <div className={'d-flex justify-content-center p-2'}>
                        <button type={'submit'} className={"btn btn-info"}>Sửa</button>
                    </div>
                </Form>
            </Formik>
            </div>
            </div>
        </>
    )
}
export default EditProduct;
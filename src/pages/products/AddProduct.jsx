import {Formik, Form, Field, ErrorMessage} from "formik";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {add} from "../../redux/services/productService.jsx";

const AddProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addProduct = (values) => {
        dispatch(add(values)).then(() =>
            navigate("/products/home")
        )
    }

    return (
        <>

            <div className={'row d-flex justify-content-center'}>
                <div className="card col-6 ">
                    <h2 className={'text-center text-success p-2'}> Thêm Mới Sản Phẩm </h2>
                    <Formik initialValues={{
                        title: "",
                        description: "",
                        price: 0
                    }}
                            onSubmit={addProduct}
                    >
                        <Form className={"container"}>
                            <Field className={"form-control"} name={"title"} placeholder={"Tên sản phẩm"}
                                   type={'text'}/>
                            <span style={{color: 'red'}}><ErrorMessage name={'title'}/></span><br/>
                            <Field className={"form-control"} name={"description"} placeholder={"Mô tả"} type={"text"}/>
                            <span style={{color: 'red'}}><ErrorMessage name={'description'}/></span><br/>
                            <Field className={"form-control"} name={"price"} placeholder={"Giá"} type={"text"}/>
                            <span style={{color: 'red'}}><ErrorMessage name={'price'}/></span><br/>
                            <div className={'d-flex justify-content-center p-2'}>
                                <button className={"btn btn-info "}>Thêm Mới</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default AddProduct;
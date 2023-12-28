import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="javascrip:;">Quản Lý Sản Phẩm</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/products/home'}> Trang Chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/products/add'}>Thêm Mới</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
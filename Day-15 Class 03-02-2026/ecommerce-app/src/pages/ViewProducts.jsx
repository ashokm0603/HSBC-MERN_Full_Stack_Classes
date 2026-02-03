import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const ViewProducts = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [slNo, setSlNo] = useState(1);
  const navigate=useNavigate();

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:4000/api/get-products");
    console.log(response.data.data);
    setProductDetails(response.data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleIncrement = () => {
    setSlNo(slNo + 1);
    return slNo;
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `http://localhost:4000/api/delete-product/${id}`,
      );
      toast.warn("product deleted");
       fetchProducts()
    } catch (err) {
      toast.error("failed to delete product");
    }
  };

  const handelEdit=(id)=>{
      navigate("/editproduct")
      localStorage.setItem("ProductId",id);
  }

  return (
    <div>
      <h1 className="text-center bg-success-subtle p-3 m-3">
        All Product Details
      </h1>
      <div className="row m-3">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center border border-success  bg-warning-subtle">
                Id
              </th>
              <th className="border border-success bg-warning-subtle text-center">
                Name
              </th>
              <th className="border border-success bg-warning-subtle text-center">
                Price
              </th>
              <th className="border border-success bg-warning-subtle text-center">
                Categories
              </th>
              <th className="border border-success bg-warning-subtle text-center">
                Image
              </th>
              <th className="border border-success bg-warning-subtle text-center">
                Quantity
              </th>
              <th className="border border-success bg-warning-subtle text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {productDetails.length > 0 ? (
              productDetails.map((product) => (
                <tr>
                  <td className="text-center border border-success">
                    {product._id}
                  </td>
                  <td className="text-center border border-success">
                    {product.productName}
                  </td>
                  <td className="text-center border border-success">
                    {product.cost}
                  </td>
                  <td className="text-center border border-success">
                    {product.categories}
                  </td>
                  <td className="text-center border border-success">
                    <img
                      src={product.imageUrl}
                      height={100}
                      width={100}
                      alt="product image"
                    />
                  </td>
                  <td className="text-center border border-success">
                    {product.quantity}
                  </td>
                  <td className="text-center border border-success">
                    <div className="btn btn-warning mx-3" onClick={()=>handelEdit(product._id)}>Edit</div>
                    <div
                      className="btn btn-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th className="text-center border border-danger bg-danger-subtle" colSpan={7}>Products Not Found</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </div>
  );
};

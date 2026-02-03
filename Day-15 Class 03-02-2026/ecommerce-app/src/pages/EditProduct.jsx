import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const EditProduct = () => {
  const [productDetails, setProductDetails] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleAgree = (e) => {
    const agree = document.getElementById("agree");
    if (agree.checked) {
      setProductDetails({ ...productDetails, checkbox: true });
    } else {
      setProductDetails({ ...productDetails, checkbox: false });
    }
  };
  const fetchProductBasedOnID = async () => {
    try {
      const id = localStorage.getItem("ProductId");
      const response = await axios.get(
        `http://localhost:4000/api/get-product/${id}`,
      );

      setProductDetails(response.data.product)
      
      console.log(productDetails);

    } catch (err) {
        toast.warn("product not found")
    }
  };

  useEffect(()=>{
    fetchProductBasedOnID ()
  },[])

  const handleUpdate = async () => {
    try {
           const id = localStorage.getItem("ProductId");
      const response = await axios.put(
        `http://localhost:4000/api/update-product/${id}`,
        productDetails,
      );
      toast.success("details updated successfully");

      setTimeout(() => {
        navigate("/viewproducts");
      }, 3000);
    } catch (error) {
      toast.error("failed update product details");
    }
  };
  return (
    <div>
      <div id="form-container">
        <Form onSubmit={handleUpdate}>
          <Row>
            <h1 className="bg-warning-subtle  m-4 " align="center">
             Update Product Details
            </h1>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                name="productName"
                type="text"
                placeholder="Enter Product Name"
                onChange={handleChange}
                value={productDetails.productName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Product Cost</Form.Label>
              <Form.Control
                type="number"
                name="cost"
                placeholder="Enter product Cost"
                onChange={handleChange}
                value={productDetails.cost}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>About Product</Form.Label>
            <Form.Control
              name="about"
              onChange={handleChange}
              placeholder="describe about product....."
              value={productDetails.about}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              name="imageUrl"
              type="url"
              onChange={handleChange}
              placeholder="Upload product image URL"
              value={productDetails.imageUrl}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>categories</Form.Label>
              <Form.Select
                id="categories"
                name="categories"
                defaultValue="Choose..."
                value={productDetails.categories}
                onChange={handleChange}
              >
                <option>Choose Categories</option>
                <option>Cloths</option>
                <option>Electronic Devices</option>
                <option>Vehicle</option>
                <option>Home Remedies</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                name="quantity"
                onChange={handleChange}
                type="number"
                placeholder="+1"
                value={productDetails.quantity}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              id="agree"
              type="checkbox"
              onClick={handleAgree}
              label="Check me out"
            />
          </Form.Group>

          <Button className="m-2" variant="primary" type="submit">
            Update
          </Button>
          <Button variant="warning" type="reset">
            back
          </Button>
        </Form>

      </div>
        <ToastContainer />
    </div>
  );
};

export default EditProduct;

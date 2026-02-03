import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast, ToastContainer } from "react-toastify";
export const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    cost: 0,
    about: "",
    imageUrl: "",
    categories: "",
    quantity: 0,
    checkbox: false,
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(productDetails);

      const response = await axios.post(
        "http://localhost:4000/api/add-product",
        productDetails,
      );
      toast.success("Product added successfully 👍");

      setProductDetails({
        productName: "",
        cost: "",
        about: "",
        imageUrl: "",
        categories: "",
        quantity: "",
        checkbox: false,
      });
    } catch (error) {
      toast.error("failed to add Product Details");
    }
  };

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
  return (
    <div id="form-container">
      <Row>
        <div>
          <h2>{localStorage.getItem("Name")}</h2>
          <h2>{localStorage.getItem("Email")}</h2>
        </div>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <h1 className="bg-success-subtle  m-4 " align="center">
            Add Product Details
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
          Submit
        </Button>
        <Button
          variant="warning"
          onClick={() => {
            toast.warn("product details rested.");
          }}
          type="reset"
        >
          Reset
        </Button>
      </Form>

      <ToastContainer />
    </div>
  );
};

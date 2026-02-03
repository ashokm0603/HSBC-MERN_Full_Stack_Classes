import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductsGrid() {
  const products = [
    "https://media.gettyimages.com/id/1419645742/photo/anonymous-woman-holding-a-gift-box-and-looking-at-beauty-cosmetics-products-inside.jpg?s=612x612&w=gi&k=20&c=O7hDiwQEgBLcyz6cAkMxEzddnmstONJOLZWVDsf0R_w=",
    "https://media.istockphoto.com/id/1060771334/photo/beauty-blogger-taking-photo-of-cosmetics.jpg?s=612x612&w=0&k=20&c=-q19OwVwkJQb-R5HNkDaLSWcEjpIlRI8tKgxGDoPdwE=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpP-oIpAQFjRMw9H7fQjMjhgC-jHIatlENFg&s",
    "https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOrIHIncvVwcn86Yj1lG2no3rymRPhF1AQ&s",
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOrIHIncvVwcn86Yj1lG2no3rymRPhF1AQ&s",
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOrIHIncvVwcn86Yj1lG2no3rymRPhF1AQ&s",
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOrIHIncvVwcn86Yj1lG2no3rymRPhF1AQ&s",
  ];
  return (
    <Row xs={1} md={4} className="g-4">
      {products.map((src, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={src} height={350} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductsGrid;

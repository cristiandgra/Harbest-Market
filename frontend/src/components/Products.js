import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import cardImg from "../assets/img/cardsImg.png";

export const Products = ({ isActivo }) => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleCloseProduct = () => setShow(false);
  const handleShowProduct = () => setShow(true);

  return (
    <div className="product-container">
      <ul className="product-list">
        <Modal show={show} onHide={handleCloseProduct}>
          <Modal.Header closeButton>
            <Modal.Title>Editar/Eliminar Producto</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control name="image" type="file" accept=".jpg,.png" />
                <Form.Text className="text-muted">
                  Solo formato PNG y JPG*
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control
                  name="productName"
                  type="text"
                  placeholder="Example:Lechuga batavia"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descripción del producto</Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  placeholder="Example: Cultivada con amor "
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Precio del producto</Form.Label>
                <Form.Control name="price" type="number" placeholder="1.79€" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseProduct}>
                Cerrar
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={handleCloseProduct}
              >
                Guardar cambios
              </Button>
              <Button
                variant="danger"
                type="submit"
                onClick={handleCloseProduct}
              >
                Eliminar producto
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="products"
              onClick={handleShowProduct}
            >
              <div className="product-card">
                <div>
                  <img
                    src={cardImg}
                    width="220px"
                    height="115px"
                    alt="lechuga-iceberg"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.productName}</h3>
                  <h5 className="product-subtitle">{product.description}</h5>
                  <strong className="product-price">{product.price} € </strong>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

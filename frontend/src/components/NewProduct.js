import { useDispatch } from "react-redux";
import { createProduct } from "../reducers/productReducer";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export const NewProduct = () => {
  const dispatch = useDispatch();

  const [showNewProduct, setShowNewProduct] = useState(false);

  const handleCloseNewProduct = () => setShowNewProduct(false);
  const handleShowNewProduct = () => setShowNewProduct(true);
  const reload = () => {
    window.location.reload();
  };
  const addProduct = async (e) => {
    e.preventDefault();
    const { target } = e;
    console.log(target);
    const content = {
      image: target.image.value,
      productName: target.productName.value,
      description: target.description.value,
      price: target.price.value,
    };
    target.productName.value = "";
    Swal.fire({
      icon: "success",
      title: "Su producto ha sido creado",
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    dispatch(createProduct(content));
    setTimeout(reload, 2000);
  };

  return (
    <div>
      <Button
        variant="primary"
        className="addProductBtn animate__animated animate__fadeInLeft"
        onClick={handleShowNewProduct}
      >
        Agregar producto
      </Button>
      <Modal show={showNewProduct} onHide={handleCloseNewProduct}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={addProduct}>
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
            <Button
              variant="primary"
              type="submit"
              onClick={handleCloseNewProduct}
            >
              Crear producto
            </Button>
            <Button variant="secondary" onClick={handleCloseNewProduct}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

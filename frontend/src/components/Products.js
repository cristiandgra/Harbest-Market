import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import cardImg from "../assets/img/cardsImg.png";
import { updateProduct } from "../reducers/productReducer";
import { deleteProduct } from "../reducers/productReducer";
import Swal from "sweetalert2";

export const Products = () => {
  const products = useSelector((state) => state.products);

  const reload = () => {
    window.location.reload();
  };

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleCloseProduct = () => setShow(false);
  const handleShowProduct = () => setShow(true);
  const [productId, setProductId] = useState("");

  const updateTheProduct = async (e) => {
    e.preventDefault();
    const content = {
      image: document.getElementsByName("image")[0].value,
      name: document.getElementsByName("name")[0].value,
      description: document.getElementsByName("description")[1].value,
      price: document.getElementsByName("price")[0].value,
    };
    document.getElementsByName("name")[0].value = "";
    Swal.fire({
      icon: "success",
      title: "Su producto ha sido modificado",
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    dispatch(updateProduct(productId, content));
    setTimeout(reload, 2000);
  };

  const deleteTheProduct = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás volver atrás",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Su producto ha sido borrado",
          showConfirmButton: false,
          timer: 1500,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        dispatch(deleteProduct(productId));
        setTimeout(reload, 2000);
      }
    });
  };

  return (
    <div className="product-container">
      <ul className="animate__animated animate__fadeInLeft product-list">
        <Modal show={show} onHide={handleCloseProduct}>
          <Modal.Header closeButton>
            <Modal.Title>Editar/Eliminar Producto</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleCloseProduct}>
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
                  name="name"
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
                onClick={updateTheProduct}
              >
                Guardar cambios
              </Button>
              <Button variant="danger" type="submit" onClick={deleteTheProduct}>
                Eliminar producto
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        {products.map((product) => {
          return (
            <li
              key={product._id}
              className="products"
              onClick={() => {
                handleShowProduct();
                setProductId(product._id);
              }}
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
                  <h3 className="product-name">{product.name}</h3>
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

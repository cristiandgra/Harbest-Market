import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NewProduct } from "./components/NewProduct";
import { Products } from "./components/Products";
import { getProducts } from "./actions/actions";
import { Header } from "./components/Header";
import "animate.css";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PaginatedItems } from "./components/PaginatedItems";

const App = () => {
  const dispatch = useDispatch();
  const [isActivo, setIsActivo] = useState("true");
  useEffect(() => {
    dispatch(getProducts(isActivo));
  }, [dispatch, isActivo]);

  return (
    <div className="dashboard">
      <Header />
      <div className="buttons-container">
        <NewProduct />
        <select
          className="animate__animated animate__fadeInLeft select-dashborad"
          onChange={(e) => {
            e.target.value === "true"
              ? setIsActivo("true")
              : setIsActivo("false");
          }}
        >
          <option value="true">Activo</option>
          <option value="false">Oculto</option>
        </select>
      </div>

      <Products isActivo={isActivo} />
      <PaginatedItems />
    </div>
  );
};

export default App;

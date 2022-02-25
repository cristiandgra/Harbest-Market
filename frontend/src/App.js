import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NewProduct } from "./components/NewProduct";
import { Products } from "./components/Products";
import { initProducts } from "./reducers/productReducer";
import { Header } from "./components/Header";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();
  const [isActivo, setIsActivo] = useState("true");
  useEffect(() => {
    dispatch(initProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="buttons-container">
        <NewProduct />
        <select
          className="select-dashborad"
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
    </div>
  );
};

export default App;

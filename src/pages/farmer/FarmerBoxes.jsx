import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { findBoxesService } from "../../services/box.services";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

//Página para mostrar las Boxes de un Agricultor

function FarmerBoxes() {
  const navigate = useNavigate();
  const [myBoxes, setMyBoxes] = useState([]);
  useEffect(() => {
    getBoxes();
  }, []);

  // Obtenemos las Boxes que ha creado el Agricultor

  const getBoxes = async () => {
    try {
      const response = await findBoxesService();
      setMyBoxes(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!myBoxes) {
    return (
      <Button variant="success" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }

  //Renderizamos las Boxes del Farmer

  return (
    <div className="box-container">
      <Card>
        {myBoxes.length === 0 ? (
          <Link to={"/cajas/create"}>
            {" "}
            <h5 className="link"> No tienes ninguna caja creada</h5>{" "}
            <Button variant="success"> Crea tu caja </Button>{" "}
          </Link>
        ) : (
          myBoxes.map((eachBox) => {
            return (
              <>
                <Card.Img variant="top" />
                <Card.Body>
                  <Link className="link" to={`/cajas/${eachBox._id}`}>
                    <img src={eachBox.image} alt="imagen caja" />
                    <Card.Title className="boxes-title">
                      {" "}
                      {eachBox.name.toUpperCase()}
                    </Card.Title>
                  </Link>
                  <Card.Text className="boxes-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis animi odit velit soluta et quas voluptatibus quos
                    ullam cumque dicta omnirupti?
                  </Card.Text>
                </Card.Body>
              </>
            );
          })
        )}
      </Card>
      <br />
      <Link to={"/agricultor"}>
        <Button variant="success"> Volver </Button>
      </Link>
    </div>
  );
}

export default FarmerBoxes;

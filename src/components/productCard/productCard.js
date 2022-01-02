import React from "react";
import { Card, Button } from "react-bootstrap";
import { getPercentage } from "../../utils/utils";

function ProductCard({ img, name, price, discount, description, colors }) {
  // Devolvemos una Card con la información del producto.
  return (
    <>
      <Card>
        <Card.Img className="img" variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title className="name" title={name}>
            {name}
          </Card.Title>
          <Card.Text>
            {discount ? (
              <>
                <span className="globalPrice">
                  <span className="priceDiscount" title={price}>
                    {price}€
                  </span>
                  <span className="discount" title={getPercentage(price,discount)}>
                    {getPercentage(price,discount)}€ (- {discount}%)
                  </span>
                </span>
              </>
            ) : (
              <span className="price globalPrice" title={price}>
                {price} €
              </span>
            )}

            <span className="colors" title={colors}>
              más colores
            </span>
          </Card.Text>
          <Button variant="primary">AÑADIR</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;

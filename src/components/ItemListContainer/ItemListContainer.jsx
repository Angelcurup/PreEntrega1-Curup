import "./ItemListContainer.css";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ItemListContainer({ productsData }) {
  console.log(productsData);
  return (
    <div className="cards">
      {productsData.map((products) => {
        return (
          <Card className="py-4" key={products.id}>
            <CardHeader className="flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                {products.description}
              </p>
              <small className="text-default-500">{products.price}</small>
              <h4 className="font-bold text-large">{products.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 cardbody">
              <Link to={`/item/${products.id}`}>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={products.thumbnail}
                />
              </Link>
              <Button color="secondary" variant="ghost">
                Buy
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

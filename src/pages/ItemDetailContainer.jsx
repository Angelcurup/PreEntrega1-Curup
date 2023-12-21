import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { productData } = useGetProductById(productId);

  return (
    <Card className="py-4" key={productData.id}>
      <CardHeader className="flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          {productData.description}
        </p>
        <small className="text-default-500">{productData.price}</small>
        <h4 className="font-bold text-large">{productData.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 cardbody">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={productData.thumbnail}
        />
        <Button color="secondary" variant="ghost">
          Buy
        </Button>
      </CardBody>
    </Card>
  );
};

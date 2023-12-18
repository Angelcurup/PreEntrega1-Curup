import './ItemListComponent.css'
import {Card, CardBody} from "@nextui-org/react";

export default function ItemList({greeting}) {
  console.log(greeting);
  return (
    <div className='itemList'>
    <Card className='item'>
      <CardBody className='itemBg'>
        <p >{greeting}</p>
      </CardBody>
    </Card>
    </div>
  );
}


import ProductType from '@/types/ProductType';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

export default function Product({ title, imageURL }: ProductType) {
  return (
    <Card className="py-4 max-w-[240px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          as={NextImage}
          alt={title}
          className="object-cover rounded-xl"
          src={imageURL}
          width={300}
          height={200}
        />
      </CardBody>
    </Card>
  );
}

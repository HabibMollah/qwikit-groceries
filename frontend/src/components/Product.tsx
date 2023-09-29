import ProductType from "@/types/ProductType";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export default function Product({ title, imageURL }: ProductType) {
  return (
    <Card className="max-w-[240px] py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h4 className="text-large font-bold">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          as={NextImage}
          alt={title}
          className="h-[200px] w-[300px] rounded-xl object-cover"
          src={imageURL}
          quality={50}
          width={300}
          height={200}
        />
      </CardBody>
    </Card>
  );
}

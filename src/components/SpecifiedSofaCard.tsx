import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface genericCardSofasProps {
    title: string,
    cardImage: string | StaticImageData,
    altImage: string
}

const SpecifiedSofaCard: React.FC<genericCardSofasProps> = ({ title, cardImage, altImage }) => {
    const stockResult = 10

    return (
        <Card shadow="sm" className="bg-neutral-800 rounded-lg mt-8">
            <CardHeader className="pb-0 flex-col items-center">
                <h3>{title}</h3>
            </CardHeader>

            <CardBody>
                <Image
                    src={cardImage}
                    alt={altImage}
                    className="object-cover rounded-lg cursor-pointer"
                />
            </CardBody>

            <CardFooter>
                <p>Quantidade no Estoque: {stockResult}</p>
            </CardFooter>
        </Card>
    );
}

export default SpecifiedSofaCard
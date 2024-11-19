import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface genericCardSofasProps {
    title: string,
    cardImage: string | StaticImageData,
    altImage: string
}

const GenericCardSofas: React.FC<genericCardSofasProps> = ({ title, cardImage, altImage }) => {
    return (
        <Link href={""}>
            <Card className="p-4">
                <CardHeader>
                    <title>{title}</title>
                </CardHeader>

                <CardBody >
                    <Image
                        src={cardImage}
                        alt={altImage}
                        className="object-cover w-72"
                    />
                </CardBody>
            </Card>
        </Link>
    );
}

export default GenericCardSofas
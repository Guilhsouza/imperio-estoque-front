import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface genericCardSofasProps {
    title: string,
    cardImage: string | StaticImageData,
    altImage: string
    hrefLink: string
}

const GenericCardSofas: React.FC<genericCardSofasProps> = ({ title, cardImage, altImage, hrefLink }) => {
    return (
        <Link href={hrefLink}>
            <Card className="bg-neutral-800 rounded-lg mt-8">
                <CardHeader className="pb-0 flex-col items-center">
                    <h3>{title}</h3>
                </CardHeader>

                <CardBody >
                    <Image
                        src={cardImage}
                        alt={altImage}
                        className="object-cover rounded-lg"
                    />
                </CardBody>
            </Card>
        </Link>
    );
}

export default GenericCardSofas
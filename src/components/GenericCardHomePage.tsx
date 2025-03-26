interface genericCardProps {
    textFooter: string,
    backgroundImage: string | StaticImageData,
    alt: string,
    href: string,
}

import { Card, CardBody, CardFooter } from "@nextui-org/card"
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import React from "react";

const GenericCard: React.FC<genericCardProps> = ({ textFooter, backgroundImage, alt, href }) => {
    return (
        <Link href={href}>
            <Card className="bg-neutral-800 rounded-lg w-full">
                <CardBody className="p-0 w-full">
                    <Image
                        src={backgroundImage}
                        alt={alt}
                        className="bg-cover w-full h-full rounded-lg"
                    />
                </CardBody>

                <CardFooter className="flex justify-center text-xl w-full">
                    <p>{textFooter}</p>
                </CardFooter>
            </Card>
        </Link>
    );
}

export default GenericCard
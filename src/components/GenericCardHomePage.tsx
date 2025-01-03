interface genericCardProps {
    backgroundImage: string | StaticImageData,
    alt: string,
    href: string
}

import { Card, CardHeader } from "@nextui-org/card"
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import React from "react";

const GenericCard: React.FC<genericCardProps> = ({ backgroundImage, alt, href }) => {
    return (
        <Link href={href}>
            <Card >
                <CardHeader className="absolute">
                    <p>Card genérico</p>
                </CardHeader>

                <Image
                    src={backgroundImage}
                    alt={alt}
                    className="bg-cover w-full h-full rounded-lg"
                />
            </Card>
        </Link>
    );
}

export default GenericCard
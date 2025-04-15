import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/editBtnHover.module.css"
import stylesFromImg from '@/styles/standardizeSizeImg.module.css'

interface typesForBedsCard {
    title: string;
    cardImage: string | StaticImageData
    altImage: string
}

const SpecifiedKitchenCard: React.FC<typesForBedsCard> = ({ title, cardImage, altImage }) => {
    const stockResult = 55

    return (
        <Card shadow="sm" className="bg-neutral-800 rounded-lg mt-8">
            <CardHeader className="pb-0 flex-col items-center">
                <h3>{title}</h3>
            </CardHeader>

            <CardBody className="h-[400px]">
                <div className={`${stylesFromImg.standardizeSizeImg} h-full`}>
                    <Image
                        src={cardImage}
                        alt={altImage}
                        fill
                        className="rounded-lg object-fill"
                    />
                </div>
            </CardBody>

            <CardFooter>
                <div className="flex justify-around w-full">
                    <p>Quantidade no Estoque: {stockResult}</p>
                    <button className={`border-solid border-2 rounded-full px-4 ${styles.btnHoverDefaultColor} ${styles.btnHover}`}>editar</button>
                </div>
            </CardFooter>
        </Card >
    )
}

export default SpecifiedKitchenCard
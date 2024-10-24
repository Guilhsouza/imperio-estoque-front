import { Card, CardHeader, CardBody } from "@nextui-org/card"
import Image from "next/image"
import Link from "next/link";

export default function GenericCard() {
    return (
        <Link href='/sofas'>
            <Card className="border rounded-lg">
                <CardBody>

                    <p>card generico</p>
                </CardBody>
            </Card>
        </Link>
    );
}
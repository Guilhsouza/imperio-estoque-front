import { ReactNode } from "react";

interface SpecifiedSofaProps {
    generalSofaTitle: string,
    sofaDescription: string,
    sofaCards: Array<ReactNode>
}

const GenericPageForSofaModels: React.FC<SpecifiedSofaProps> = ({ generalSofaTitle, sofaDescription, sofaCards }) => {
    return (
        <>
            <h2 className="mt-9 text-3xl text-center">{generalSofaTitle}</h2>
            <p className="mt-5 mx-36 text-gray-400 text-center">{sofaDescription}</p>

            <div className="w-full max-h-72 grid grid-cols-4 justify-self-center gap-6 mt-6 px-16">
                {sofaCards}
            </div>
        </>
    )
};

export default GenericPageForSofaModels
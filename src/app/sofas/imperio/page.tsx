import { Metadata } from 'next';
import GenericPageForSofaModels from '../../../components/GenericPageForSofaModels'

export const metadata: Metadata = {
    title: 'Sofás | Império Sofás'
};

export default function imperioPage() {
    return (
        <GenericPageForSofaModels />
    )
}
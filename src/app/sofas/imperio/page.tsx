import { Metadata } from 'next';
import GenericPageForSofaModels from '@/components/sofaPageComponents/GenericPageForSofaModels'
import SpecifiedSofaCard from "@/components/sofaPageComponents/SpecifiedSofaCard";
import sofaEspecified from "@/images/sofa-especified.jpg"
import sofa2 from "@/images/cama-generic.jpg"
import sofa3 from "@/images/sofa-background.png"

export const metadata: Metadata = {
    title: 'Sofás | Império Sofás'
};

export default function imperioPage() {
    return (
        <GenericPageForSofaModels
            generalSofaTitle='Titulo do Sofa'

            sofaDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem corrupti maiores, possimus ad sint temporibus recusandae ducimus officiis 
            sequi dolorum assumenda tempore nisi asperiores incidunt ipsum tempora repellat suscipit quo enim! Autem expedita, similique officia incidunt ex odit! 
            Voluptate temporibus ipsum natus dolorum inventore, illo molestiae minima consequatur facilis.Non illo repudiandae consequatur nostrum cumque amet 
            perferendis asperiores reiciendis provident quaerat veniam, ex laborum porro corrupti excepturi.Harum quasi consequuntur distinctio qui ex dolores beatae 
            ullam ? Iure at, quos vero unde maiores rerum.Earum, quas quaerat! Amet quam corporis accusantium similique a maxime perspiciatis provident esse, 
            tenetur eius id voluptatum.'

            sofaCards={[
                <>
                    <SpecifiedSofaCard title='sofa Z 2.10' altImage='foto do sofa' cardImage={sofaEspecified} />
                    <SpecifiedSofaCard title='sofa Z 2.10' altImage='foto do sofa' cardImage={sofa2} />
                    <SpecifiedSofaCard title='sofa Z 2.10' altImage='foto do sofa' cardImage={sofa3} />
                </>
            ]}
        />


    )
}

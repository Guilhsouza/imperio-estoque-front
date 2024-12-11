import SpecifiedSofaCard from "../components/SpecifiedSofaCard";
import sofaEspecified from "../images/sofa-especified.jpg"

interface genericInterface {

}

const GenericPageForSofaModels = () => {
    return (
        <>
            <h2 className="mt-9 text-3xl text-center">Titulo do sofá</h2>
            <p className="mt-5 mx-36 text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo atque ipsam nisi, itaque id voluptates veniam accusamus
                illum, reiciendis facilis aut adipisci quasi impedit optio cumque cum earum, commodi quod maxime quidem blanditiis. Optio at aperiam obcaecati ducimus
                sunt fugiat doloremque quo debitis explicabo nihil! Nemo provident cum vero quasi quod aliquam eaque iusto perspiciatis quo, tenetur officia omnis
                perferendis error animi repudiandae aliquid consectetur suscipit at nisi numquam necessitatibus minima? Quos, natus nostrum! Vitae ex quo esse nihil
                atque, placeat odit sint ipsam et sequi porro dolor dolores eum aliquam aliquid iure ipsa amet nulla laboriosam suscipit. Laboriosam.</p>

            <div className="w-full max-h-72 grid grid-cols-4 justify-self-center gap-6 mt-6 px-16">
                <SpecifiedSofaCard title={"Sofá X 2.10m"} cardImage={sofaEspecified} altImage={""} />
                <SpecifiedSofaCard title={"Sofá X 2.10m"} cardImage={sofaEspecified} altImage={""} />
                <SpecifiedSofaCard title={"Sofá X 2.10m"} cardImage={sofaEspecified} altImage={""} />
                <SpecifiedSofaCard title={"Sofá X 2.10m"} cardImage={sofaEspecified} altImage={""} />
            </div>
        </>
    )
};

export default GenericPageForSofaModels
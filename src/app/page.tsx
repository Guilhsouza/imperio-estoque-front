import { roboto } from "./fonts/fonts";
import GenericCardHomePage from "@/components/GenericCardHomePage";
import sofaImage from "../images/sofa-background.png"

export default function Home() {
  return (
    <>
      <main>
        <h2 className={`text-center mt-9 mb-5 text-3xl ${roboto.className}`}> Estoque Império Sofás</h2>
        <div className="w-full max-w-2xl max-h-72 grid grid-cols-2 justify-self-center gap-4">
          <GenericCardHomePage alt="Imagem do Sofá" href="/sofas" backgroundImage={sofaImage} />
          <GenericCardHomePage alt="Imagem do Sofá" href="/sofas" backgroundImage={sofaImage} />
          <GenericCardHomePage alt="Imagem do Sofá" href="/sofas" backgroundImage={sofaImage} />
          <GenericCardHomePage alt="Imagem do Sofá" href="/sofas" backgroundImage={sofaImage} />
        </div>
      </main >
    </>
  );
}

import { roboto } from "./fonts/fonts";
import GenericCardHomePage from "@/components/GenericCardHomePage";
import sofaImage from "../images/sofa-background.png"

export default function Home() {
  return (
    <>
      <main className="h-full overflow-hidden w-full">
        <h2 className={`text-center my-10 text-3xl ${roboto.className}`}> Estoque Império Sofás</h2>
        <div className="max-w-5xl grid grid-cols-2 justify-self-center gap-x-6 gap-y-12 w-full  h-full">
          <GenericCardHomePage textFooter="Sofás" alt="Imagem do Sofá" href="/sofas" backgroundImage={sofaImage} />
          <GenericCardHomePage textFooter="Camas e Colchões" alt="Imagem do Sofá" href="/sofas" backgroundImage={sofaImage} />
          <GenericCardHomePage textFooter="Sala" alt="Imagem do Sofá" href="/sofas" backgroundImage={sofaImage} />
          <GenericCardHomePage textFooter="Cozinha" alt="Imagem do Sofá" href="/sofas" backgroundImage={sofaImage} />
        </div>
      </main >
    </>
  );
}

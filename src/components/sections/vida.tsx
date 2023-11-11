const Vida = () => {
    return (
      <>
        <div className="m-6 p-4">
          <h1 className="text-xl">Estilo de vida</h1>
        </div>
        <div className="flex m-4 p-4">
          <img src="/src/assets/img/vida.jpg" alt="Estilo de vida" className="w-[40%]" />
          <div className="flex flex-col ml-4 px-4 leading-relaxed">
            <ul className="list-disc mb-4">
              <li className="py-2">Los alemanes son gente hospitalaria, orgullosa de su cultura y abierta a las influencias extranjeras. Se sienten interesados en integrar a los que vienen de fuera y mostrarles su riqueza histórica y cultural.</li>
              <li className="py-2">La cocina alemana es diversa, creativa y saludable. Tiene platos típicos de cada región, como el asado de cerdo con almojábanas o las costillas con chucrut, pero también se ha abierto a otras gastronomías, como la italiana, la china o la griega. Además, hay una tendencia creciente al consumo de comida vegetariana y vegana.</li>
              <li className="py-2">El sistema educativo alemán es uno de los más eficientes de Europa. Es gratuito y público, aunque también hay opciones privadas. Los estudiantes aprenden dos idiomas, el alemán y el inglés, y tienen acceso a una amplia oferta de carreras y especializaciones.</li>
              <li className="py-2">La calidad de vida en Alemania es muy alta. El país ofrece buenas condiciones de trabajo, seguridad jurídica, libertad de culto, asistencia sanitaria, estabilidad política y bajos niveles de criminalidad. Algunas ciudades alemanas, como Düsseldorf, Múnich o Fráncfort, han sido reconocidas entre las mejores del mundo para vivir.</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  
  export default Vida;
  
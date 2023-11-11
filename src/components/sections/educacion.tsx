
const Educacion = () => {
  return (
    <>
        <div className="m-6 p-4">
          <h1 className="text-xl">Educación</h1>
        </div>
        <div className="flex m-4 p-4">
          <div className="flex flex-col ml-4 px-4 leading-relaxed">
            <ul className="list-disc mb-4">
              <li className="py-2">La educación preescolar, desde los tres hasta los seis años, es opcional y se basa en eljuego y la socialización. Los niños no se separan por edades ni aprenden a leer o escribir hasta la escuela primaria.</li>
              <li className="py-2">La educación primaria, desde los seis hasta los diez o doce años, es obligatoria y gratuitapara todos. Los niños aprenden las materias básicas y un idioma extranjero desde el tercer curso.</li>
              <li className="py-2">Al finalizar la educación primaria, los niños son distribuidos en diferentes tipos de escuelas secundarias según sus calificaciones y la recomendación de su profesor. Los padres no suelen tener mucha influencia en esta decisión.</li>
              <li className="py-2">Los tipos de escuelas secundarias son: el Gymnasium, que prepara a los alumnos para acceder a la universidad y dura hasta el 12º o 13º grado; la Realschule, que ofrece una formación más práctica y termina en el 10º grado; la Hauptschule, que proporciona una formación profesional básica y finaliza en el 9º grado; y la Gesamtschule, que integra a los alumnos de diferentes niveles y les permite cambiar de opción.</li>
              <li className="py-2">Después de la escuela secundaria, los alumnos pueden optar por seguir una formación profesional dual, que combina la teoría en la escuela con la práctica en una empresa; o por continuar sus estudios en la educación superior, que incluye las universidades y las Fachhochschule, que son instituciones de educación superior especializadas en ciertas áreas.</li>
              <li className="py-2">- El sistema educativo alemán ha sido reconocido por su calidad y su alto rendimiento, pero también ha sido criticado por su rigidez y su segregación temprana de los alumnos. Los resultados de los estudios PISA han mostrado que Alemania tiene que mejorar en algunos aspectos, como la equidad y la inclusión.</li>
            </ul>
          </div>
          <img src="/src/assets/img/educacion.jpg" alt="Educacion" className="w-[35%]" />
        </div>
      </>
  )
}

export default Educacion
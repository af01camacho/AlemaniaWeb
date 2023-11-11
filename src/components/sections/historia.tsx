const Historia = () => {
  return (
    <>
      <div className="m-6 p-4">
        <h1 className="text-xl">Historia</h1>
      </div>
      <div className="flex m-4 p-4">
        <div className="flex mx-2">
          <p className="flex-1 leading-relaxed">
            La historia de Alemania se remonta a la antigüedad, cuando diferentes tribus germánicas ocupaban el territorio. En el siglo X, se formó el Sacro Imperio Romano Germánico, que duró hasta el siglo XIX. Después de las guerras napoleónicas, se creó la Confederación Germánica, que fue sustituida por el Imperio Alemán en 1871, tras la unificación de los estados alemanes bajo el liderazgo de Prusia. El imperio se disolvió después de la Primera Guerra Mundial y se estableció la República de Weimar, que fue derrocada por el régimen nazi en 1933. El nazismo llevó a Alemania a la Segunda Guerra Mundial y al Holocausto, que causó la muerte de millones de personas. Al final de la guerra, Alemania fue dividida en cuatro zonas de ocupación por los aliados, que se convirtieron en dos estados: la República Federal de Alemania (RFA) o Alemania Occidental, y la República Democrática Alemana (RDA) o Alemania Oriental. Ambos estados se reunificaron en 1990, tras la caída del muro de Berlín y el fin de la Guerra Fría.
          </p>
        </div>
        <img src="/src/assets/img/historia.jpg" alt="Historia de Alemania" className="w-[40%]" />
      </div>
    </>
  );
};

export default Historia;

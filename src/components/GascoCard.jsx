
export const GascoCard = () => {

  return (
    <>
      <div className="container">
        <gasco-card>
          <gasco-card-header>
            <gasco-card-title>título de la carta</gasco-card-title>
            <ion-icon name="share"></ion-icon>
          </gasco-card-header>
  
          <gasco-card-content>
            Contenido del card
          </gasco-card-content>
        </gasco-card>

        <gasco-card direction="horizontal-reverse"></gasco-card>
      </div>

      <div className="container">
        <gasco-card>
          <gasco-card-header>
            <gasco-card-title>título 2 </gasco-card-title>
            <ion-icon name="share"></ion-icon>
          </gasco-card-header>
  
          <gasco-card-content>
           no veo una diferencia entre horizontral y vertical
          </gasco-card-content>
        </gasco-card>

        <gasco-card direction="vertical"></gasco-card>
      </div>
    </>
  );
};

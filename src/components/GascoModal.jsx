

export const GascoModal = () => {
    const presentModal = () => {
        const modal = document.querySelector('gasco-modal');
        modal.isOpen = true;
        modal.addEventListener('gascoModalDidDismiss', () => {
            modal.isOpen = false;
        });
    }

  return (
    <>
        <div className="contenedor">
            <gasco-button onClick={presentModal}>Abrir Modal Simple</gasco-button>
            <gasco-modal modal-title="Hola mundo" modal-body="este modal tiene un contenido" type="basic"></gasco-modal>

        </div>
    </>
  )
}

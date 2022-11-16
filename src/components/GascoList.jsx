export const GascoList = () => {
  return (
    <>
      <div className="contendor">
        <gasco-list>
          <gasco-item>
            <ion-icon slot="start" name="share"></ion-icon>
            <gasco-label>Item 1</gasco-label>
          </gasco-item>
          <gasco-item>
            <gasco-label>Item 2</gasco-label>
          </gasco-item>
          <gasco-item>
            <gasco-label>Item 3</gasco-label>
          </gasco-item>
          <gasco-item>
            <gasco-label>Item 4</gasco-label>
          </gasco-item>
          <gasco-item divider>
            <gasco-label>Item 5</gasco-label>
          </gasco-item>
          <gasco-item disabled>
            <gasco-label>Item 6</gasco-label>
          </gasco-item>
        </gasco-list>
      </div>
    </>
  );
};

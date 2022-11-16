

export const GascoInputs = () => {

  
    return (
    <>
<div className="contenedor">
<gasco-input size="small" label="input-small"></gasco-input>
<gasco-input size="large" label="input-large"></gasco-input>

<gasco-input placeholder="Enter Input" label="placeholder"></gasco-input>

<gasco-input type="number" value="333" label="numero"></gasco-input>
<gasco-input type="password" value="333asdasd" label="password"></gasco-input>
<gasco-input type="date" label="calendar"></gasco-input>

<gasco-input value="Disabled" disabled label="desabilitado"></gasco-input>


<gasco-input indicator label="numero celular"></gasco-input>
<div className="css-afector">    
<gasco-input text-help="porfavor escribir aqui" label="texto-ayuda"></gasco-input>

</div>

<gasco-input limit maxlength="20" placeholder="maximo de caracteres" label="restrictions"></gasco-input>

</div>

    </>
  )
}

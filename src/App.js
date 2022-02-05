
import './App.css';
import React, { useState } from 'react';

import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Mensaje from './Componentes/Mensaje';
import Resultado from './Componentes/Resultado';
import Spinner from './Componentes/Spinner';





function App() {

      //Definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState(' ');
    const [total,guardarTotal] = useState(0);
    const [cargando,guardarCarga] = useState(false);

    let componente;
   if (cargando) {
       componente = <Spinner/>
   }else  if (total === 0) {
        componente = <Mensaje/>;
    }else {
        componente =  <Resultado
                                            total={total}
                                            plazo={plazo}
                                            cantidad={cantidad}
                                     />;
    }


  return (
        <div className="App">
                <Header 
                    titulo="Cotizador de Prestamos"
                />
                <div className="container">
                        <Formulario
                            cantidad={cantidad}
                            guardarCantidad={guardarCantidad}
                            plazo={plazo}
                            guardarPlazo={guardarPlazo}
                            total={total}
                            guardarTotal={guardarTotal}
                            guardarCarga={guardarCarga}
                        
                        />

                        <div className="mensajes">
                            {componente}
                       </div>
                </div>

        </div>
  );
}

export default App;

import React from 'react';

const Resultado = ({total,plazo,cantidad}) => {
              return ( 
              <div className="u-full-width resultado">
                <h2>Resumen</h2>
                <p>La Cantidad Soliciatada es: $ {cantidad}</p>
                <p>A pagar en : {plazo} Meses</p>
                <p>Su pago Mensual es de : {(total / plazo).toFixed(2)}</p>
                <p>Total a Pagar : $ {total}</p>
            </div> 
             );
}
 
export default Resultado;

   

          
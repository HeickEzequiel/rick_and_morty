import React from "react";

const error404 = "https://cdn.domestika.org/c_fit,dpr_1.0,f_auto,q_80,t_base_params,w_820/v1588421153/content-items/004/415/154/Captura_de_pantalla_2020-05-02_a_las_13.01.50-original.png?1588421153"

function Error (props){

    return(
        <div>
            <img src={error404} alt="Not Found" />
        </div>
    )
}

export default Error
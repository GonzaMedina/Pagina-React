import React from "react";

const AplicacionCrudTableRow = ({el, setDataToEdit,deleteData})=>{//destructuracion del obejeto


    
    let {nombreContacto,apellidoContacto,emailContacto,id} = el;
    return(
        <tr>
            <td>{nombreContacto}</td>
            <td>{apellidoContacto}</td>
            <td>{emailContacto}</td>
            
            <td>
                <button onClick={()=>setDataToEdit(el)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>

        </tr>
    );
};
export default AplicacionCrudTableRow;
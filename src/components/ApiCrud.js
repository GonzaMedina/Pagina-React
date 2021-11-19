import React,{useEffect, useState} from "react";
import { helpHttp } from "../Helpers/helphttp";
import AplicacionCrudForm from "./AplicacionCrudForm";
import AplicacionCrudTable from "./AplicacionCrudTable";
import MessageApi from "./MessageApi";

const ApiCrud = () => {
    const [db,setDb] = useState([]);

    const [dataToEdit,setDataToEdit] = useState(null);

    const [error,setError] = useState(null);
    //si es null, va a ser una insercion, sino es una edicion

    let api=helpHttp();
    let url= "http://localhost:5000/contactos";

    //mostamos la respuesta en la UI
    useEffect(()=>{

    },[]);

    const createData =(data)=>{
        data.id= Date.now(); //para crear un id en el campo
        let options={
            body:data,
            headers:{"content-type":"application/json"},
        };
        api.post(url,options).then(res=>{
            console.log(res);
            if(!res.err){
                setDb([...db,res ])
            }else{
                setError(res);
            }
        });
        
        //trae la base de datos como esta

    };
    const updateData =(data)=>{
        let endpoint =`${url}/${data.id}`;
        //console.log(endpoint);

        let options={
            body:data,
            headers:{"content-type":"application/json"},
        };
        api.put(endpoint,options).then((res)=>{
            console.log(res);
            if(!res.error){
                let newData= db.map(el=>el.id ===data.id? data:el);
                setDb([...db,res ]);
                setDb(newData);
            }else{
                setError(res)
            }
            
        });
        //trae la base de datos como esta

    };
    //let newData= db.map(el=>el.id ===data.id? data:el);
    //setDb(newData);

    // const deleteData =(id)=>{
    //     let isDelete = window.confirm(`"Esta seguro que quiere eliminar el ${id}"`);
    //     if(isDelete){
    //         let newData = db.filter((el)=>el.id!==id);
    //         setDb(newData);
    //     }else{
    //         return;
    //     }
    // }

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);
        if (isDelete) {
            let endpoint = `${url}/${id}`;
            let options = {
            headers: { "content-type": "application/json" },
          };
    
          api.del(endpoint, options).then((res) => {
            //console.log(res);
            if (!res.err) {
              let newData = db.filter((el) => el.id !== id);
              setDb(newData);
            } else {
              setError(res);
            }
          });
        } else {
          return;
        }
      };

    return(
        <div>
            <h2> CRUD API </h2>
            <AplicacionCrudForm
            createData = {createData}
            updateData = {updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            {error&& <MessageApi/>}
            <AplicacionCrudTable
            data={db}
            deleteData={deleteData}//funcion que actualiza la variable, deleteData
            setDataToEdit={setDataToEdit}//funcion que actualiza la variable, setDataToEdit
            />

        </div>
    )

}

export default ApiCrud;
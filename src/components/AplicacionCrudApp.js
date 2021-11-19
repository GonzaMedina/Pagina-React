import React,{useState} from "react";
import AplicacionCrudForm from "./AplicacionCrudForm";
import AplicacionCrudTable from "./AplicacionCrudTable";



const inicialDb = [
    {
        id:1,
        nombreContacto: "Gonzalo",
        apellidoContacto: "Medina",
        emailContacto: "elgonzaexe@gmail.com",
    },
    {
        id:2,
        nombreContacto: "Ezequiel",
        apellidoContacto: "Delaloye",
        emailContacto: "eze_delaloye@hotmail.com",
    },
    {
        id:3,
        nombreContacto: "Emanuel",
        apellidoContacto: "Tauber",
        emailContacto: "emanueltauber@gmail.com",
    },
    {
        id:4,
        nombreContacto: "Lisandro",
        apellidoContacto: "Vizcarra",
        emailContacto: "lisandrovizcarra@hotmail.com",
    },
];


const AplicacionCrudApp = () => {
    const [db,setDb] = useState(inicialDb);
    
    const [dataToEdit, setDataToEdit] = useState(null);
    //si es null, va a ser la insercion, sino es una edicion
    
    const createData =(data)=>{    
        
    };

    const updateData =(data)=>{
        let newData= db.map(el=>el.id ===data.id? data:el);
        setDb(newData);
    };

    const deleteData =(id) => {
        let isDelete = window.confirm(`"Esta seguro que quiere eliminar el ${id}`);

        if (isDelete){
            let newData = db.filter((el)=>el.id!==id);
            setDb(newData);
        }else{
            return;
        }
    };


    return(
        <div>
            <h2>Aplicacion CRUD App</h2>
            <AplicacionCrudForm
            createData ={createData}
            updateData ={updateData}
            dataToEdit ={dataToEdit}
            setDataToEdit ={setDataToEdit}
            />
            <AplicacionCrudTable
            data={db}
            deleteData={deleteData} //funcion que actualiza la variable
            setDataToEdit={setDataToEdit} //funcion que actualiza la variable
            />
        </div>
    )
};
export default AplicacionCrudApp;
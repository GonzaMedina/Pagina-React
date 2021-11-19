import React,{useState,useEffect} from "react";


const initialForm = {
    nombreContacto:"",
    apellidoContacto:"",
    emailContacto:"",
    id:null,
};

const AplicacionCrudForm =({createData,updateData,dataToEdit,setDataToEdit}) =>{ 
    const [form,setForm]= useState(initialForm);

    useEffect(()=>{//actualiza eñ esta del formulario con los datos a editar
        if(dataToEdit){
            setForm(dataToEdit);//Asigna al formulario los datos del registro a editar
        }else{
            setForm(initialForm);
        }
    },[dataToEdit]);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.nombreContacto||!form.apellidoContacto||!form.emailContacto){
            alert ("Datos incompletos");
            return;
        }
        if (form.id===null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    }
    
    
    
    const handleReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }
    return(
        <div>
            <h3>{dataToEdit? "Editar":"Agregar"} Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombreContacto" placeholder="Nombre Contacto" onChange={handleChange} value={form.nombreContacto}/>
                <input type="text" name="apellidoContacto" placeholder="Apellido Contacto" onChange={handleChange} value={form.apellidoContacto}/>
                <input type="text" name="emailContacto" placeholder="Email Contacto" onChange={handleChange} value={form.emailContacto}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
};
export default AplicacionCrudForm;
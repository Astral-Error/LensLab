import React from 'react'
import { useState } from "react"
import "../App.css"
import { toast } from 'react-hot-toast'


const AddCard = ({closeModal, counter, addLens}) =>{
    const [closing, setClosing] = useState(false);
    const[lens, setLens] = useState({
        name:"",
        brand:"",
        fl:"",
        aperture:"",
        mount:"",
        wght:""
    })
    function handleChange(e){
        setLens({...lens,[e.target.name]: e.target.value});
    }
    function handleClose(){
        setClosing(true);
        setTimeout(() => {
            closeModal();
        }, 200);
    };
    function handleSubmit(e){
        e.preventDefault();
        if(lens.name===""||lens.brand===""||lens.fl===""||lens.aperture===""||lens.mount===""||lens.wght===""){
            toast.error("Can't have empty fields");
            return;
        }
        addLens({...lens,id: counter+1}); 
        toast.success("Lens has been added");
        closeModal();
    }
    return (
        <div className={`modal-overlay ${closing ? "closing" : ""}`}>
            <div className={`modal-card ${closing ? "closing" : ""}`}>
                <div className="modal-header">
                    <h2>Add Lens</h2>
                    <button onClick={handleClose}>← Back</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Lens Name" onChange={handleChange}/>
                    <input name="brand" placeholder="Brand" onChange={handleChange}/>
                    <input name="fl" placeholder="Focal Length" onChange={handleChange}/>
                    <input name="aperture" placeholder="Aperture" onChange={handleChange}/>
                    <input name="mount" placeholder="Mount" onChange={handleChange}/>
                    <input name="wght" placeholder="Weight" onChange={handleChange}/>
                    <button type="submit">Add Lens</button>
                </form>
            </div>
        </div>
    )
}

export default AddCard

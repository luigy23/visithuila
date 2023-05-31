"use client"
import axios from "axios";
import estilo from "../../styles/lugar.module.css";
import { useEffect, useState } from "react";
import ReactStars from 'react-stars'


export default function Page({ params }) {

    const [lugar, setLugar] = useState([]);

    const traerLugar = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.lugar}`);
        console.log(res.data);
        setLugar(res.data);
    }

    useEffect(() => {
        traerLugar();

    }, []);


    const [rating, setRating] = useState(0) // initial rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
     

    return (
        <main className=" flex flex-col w-full items-center">
            <div className={estilo.hero}>
            <div className="contenedor flex flex-col items-center justify-center gap-3">
            <h1 className="text-slate-100">Desierto de la Tatacoa</h1>
            <p className="w-2/3 text-slate-400">{lugar.body}</p>
            </div>
            </div>
            <div className="contenedor flex flex-col items-center justify-center gap-3 p-10">
                <h2 className="font-black text-2xl">¿Ya fuiste?</h2>
                <span>Califica este lugar</span>
                <div className="flex flex-col items-center justify-center">
                <ReactStars count={5} onChange={handleRating} size={40} color2={'#ffd700'} value={rating} />
                <span>{rating}</span>
                <button className="bg-verdeH-700 text-white px-3 py-1 rounded-xl">Enviar calificación</button>

                </div>
                
            
            </div>
            
        </main>)
  }
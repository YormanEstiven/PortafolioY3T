import React, { useState } from 'react'
import { Card } from './Card';
import './news.css'
import data from '../../../data.js';

const dataNews: any= data;

export const NewsApi = () => {
    const [articles, setData] = useState<any[]>([])
    const [category, setCategory] = useState<string>("")


    const handleSelect = (evento: React.FormEvent<HTMLSelectElement> | any) => {
        setCategory(evento.target.value);
    }

    const handleClick = (evento: React.FormEvent) => {
        evento.preventDefault()
       console.log(category)
       dataNews.forEach((item:any,index:any)=>{
           if (index==parseInt(category)) {
            if (index==0) {
                setData(item.technology)
            }else if (index==1) {
                setData(item.entertainment)
            }else if (index==2) {
                setData(item.sports)
            }else if (index==3) {
                setData(item.health)
            }else if (index==4) {
                setData(item.business)
            }
            
           }
       })
    }

    return (
        <div className='container-news'>
            <div className="container-form">
                <form action="">
                    <label htmlFor="">¿Sobre que tema te interesan las noticias?</label>
                    <select name="category" id="category" onChange={handleSelect}>
                        <option value="0">Tecnología</option>
                        <option value="1">Entretenimiento</option>
                        <option value="2">Deportes</option>
                        <option value="3">Salud</option>
                        <option value="4">Negocios</option>
                    </select>
                    <input type="submit" value="Enviar" onClick={handleClick} />
                </form>
            </div>
            <div className="container-cards">
                {
                    articles.length > 0 &&
                    articles.map((value,index)=> ( <Card key={index} title={value.title} author={value.author} publishedAt={value.publishedAt} /> ))
                }
            </div>
        </div>
    )
}

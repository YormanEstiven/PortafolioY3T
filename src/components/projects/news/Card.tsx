import React from 'react'

interface cardProps{
    title: string;
    author: string;
    publishedAt: string;
}
export const Card: React.FC<cardProps> = ({title,author,publishedAt}) => {
    return (
        <div className="card">
            <h3 className='h3'>{title}</h3>
            <span className='span'>{author}</span>
            <p className='parrafo'>{publishedAt}</p>
        </div>
    )
}

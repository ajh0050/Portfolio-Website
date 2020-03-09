import React from 'react';
import CardInfo from '../components/CardInfo';

const Card = ({item, click}) => (
    
        <div className="d-inline-block g-card" onClick={(e) => click(item)}>
            <img className="g-card-image" src={item.imgSrc} alt={item.imgSrc} />
            { item.selected && <CardInfo title={item.title} subTitle={item.subTitle} link={item.link} /> }
        </div>
    );



export default Card;
import React from "react"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {setFavorite, deleteFavorite} from '../actions'; 
import './assets/styles/components/CarrouselItem.scss';
import play from '../components/assets/static/play-icon.png'
import plus from '../components/assets/static/plus-icon.png'
import remove from '../components/assets/static/remove-icon.png'

const CarrouselItem = (props) =>  {
  const {id, cover,title, year, contentRating, duration, isList } = props;
   const handleSetFavorite = () => {
     props.setFavorite({ id, cover,title, year, contentRating, duration 
    })
   }

   const handleDeleteFavorite = (itemId) => { 
     props.deleteFavorite (itemId)

   }
  return(

      <div className="carousel-item">
          <img className="carousel-item__img" src= {cover} alt={title}  />
          <div className="carousel-item__details">
            <div>
              <Link to = {`/Player/${id}`}>
              <img 
               className="carousel-item__details--img"
               src= {play}
               alt="Play Icon"
              /> 
              </Link>
             
              { isList ? 
               <img className= "carousel-item__details--img"
               src = {remove} 
               alt="Remove"
               onClick = {() => handleDeleteFavorite(id)}
               />:
               <img
               className="carousel-item__details--img" 
               src= {plus}
               alt="Plus Icon" 
               onClick = {handleSetFavorite}
                /> 
              }
               
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
            </p>
          </div>
        </div>


  );
  }

CarrouselItem.propTypes = {
  cover : PropTypes.string,
  title : PropTypes.string,
  year  : PropTypes.number,
  contentRating: PropTypes.string,
  duration:PropTypes.number,
}

const mapDispatchToProps ={
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarrouselItem);
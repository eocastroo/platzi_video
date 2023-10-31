import React, { useLayoutEffect } from 'react';
import {connect} from 'react-redux';
import {getVideoSource} from '../actions/';
import '../components/assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';


const Player = props => {
    const { id } = props.match.params;
    const hasPLaying = Object.keys(props.playing).length > 0;
    useLayoutEffect(() => {
        props.getVideoSource(id);
    }, [] );

    return hasPLaying ? (
    
    <div className="PLayer">
            <video controls autoPlay>
                <source src={props.playing.source} type= "Video/mp4">
                </source>
            </video>
    <div className="Player-back">
         <button type="button" onClick={() => props.history.goBack()}>
             Regresar
         </button>
       </div>
    </div>

    ) : <NotFound />;
};

const mapStateToProps = state =>{
    return {
        playing: state.playing,

    };
};

const mapDispatchToProps = {
    getVideoSource,
}


export default connect(mapStateToProps, mapDispatchToProps)(Player);
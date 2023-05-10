import './presentation.css';
import IMG from './IMG.png';


function presentation() {

    return(
        <div className='container-presentation'>
                <img src={IMG} alt='image présentation' className='img' />
            <h1 className='titre'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default presentation ;
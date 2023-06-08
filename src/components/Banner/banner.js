import './banner.css';

const Banner = ({image,content}) =>{
    return(
        <div className='container-presentation'>
            <div>
                <img src={image} alt='image présentation' className='img' />
            </div>
            <div>
                <h1 className='titre'>{content}</h1>
            </div>
        </div>
    );
}

export default Banner;
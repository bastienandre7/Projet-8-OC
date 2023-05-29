import './banner.css';

const Banner = ({image,content}) =>{
    return(
        <div className='container-presentation'>
                <img src={image} alt='image présentation' className='img' />
            <h1 className='titre'>{content}</h1>
        </div>
    );
}

export default Banner;
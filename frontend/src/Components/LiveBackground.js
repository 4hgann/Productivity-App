import Moon from '../Assets/full_moon.mp4';

function LiveBackground () {
    return(
        <video className='video-background' src={Moon} autoPlay muted loop/>
    );
}

export default LiveBackground;
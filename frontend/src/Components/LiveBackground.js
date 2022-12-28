import Red from '../Assets/red.mp4'

function LiveBackground () {
    return(
        <video className='video-background' src={Red} autoPlay muted loop/>
    );
}

export default LiveBackground;
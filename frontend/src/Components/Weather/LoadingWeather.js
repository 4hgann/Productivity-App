import { Spin } from 'antd';
import '../../Styles/WeatherWidget.css'
import { LoadingOutlined } from '@ant-design/icons';

const LoadingWeather = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return(
        <div className="weather-widget">
            <div className='loading'>
                <Spin tip='Loading...' indicator={antIcon}/>
            </div>
        </div>
    )
}

export default LoadingWeather;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BannerOfWorks.scss'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

function BannerOfWorks() {
    return (
        <div className="contaienr-banner">
            <div className='block'>

            <h1 className='title'>Сайт временно недоступен</h1>
            <FontAwesomeIcon className='icon' icon={faPersonDigging} />
            </div>
        </div>
    );
}

export default BannerOfWorks;
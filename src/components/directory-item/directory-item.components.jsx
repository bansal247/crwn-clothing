import {BackgroundImage,Body,DirectoryItemContainer} from './directory-item.styles.jsx'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();
    const goToCategory = () => {
      navigate(route);
    }
    return (
        <DirectoryItemContainer onClick={goToCategory}>
        {/* <div className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }} /> */}
        <BackgroundImage imageurl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;
import PropTypes from 'prop-types';
import AlbumsDisplay from "./albums-display.jsx";

const ContentDisplay = ({ content, displayType }) => {
    switch (displayType) {
        case "Albums":
            return <AlbumsDisplay content={content} />;
        default:
            return null;
    }
};

ContentDisplay.propTypes = {
    content: PropTypes.array.isRequired,
    displayType: PropTypes.string.isRequired,
};

export default ContentDisplay;

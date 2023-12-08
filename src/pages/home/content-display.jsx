import PropTypes from 'prop-types';
import AlbumsDisplay from "./albums-display.jsx";
import ArtistsDisplay from "./artists-display.jsx";
import PodcastsDisplay from "./podcasts-display.jsx";

const ContentDisplay = ({ content, displayType }) => {
    switch (displayType) {
        case "Albums":
            return <AlbumsDisplay content={content} />;
        case "Artists":
            return <ArtistsDisplay content={content} />;
        case "Podcasts":
            return <PodcastsDisplay content={content} />;
        default:
            return null;
    }
};

ContentDisplay.propTypes = {
    content: PropTypes.array.isRequired,
    displayType: PropTypes.string.isRequired,
};

export default ContentDisplay;

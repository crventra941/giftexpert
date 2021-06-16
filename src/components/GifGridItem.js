import PropTypes from 'prop-types';

export const GifGridItem = ({ img }) => {
  const { title, url } = img;

  return (
    <div className="animate__animated animate__fadeIn card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  img: PropTypes.exact({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })
}

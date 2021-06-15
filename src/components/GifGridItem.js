export const GifGridItem = ({ img }) => {
  const { title, url } = img;

  return (
    <div className="animate__animated animate__fadeIn card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

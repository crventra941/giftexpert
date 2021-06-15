import { GifGridItem } from "./GifGridItem";

import { useFetch } from "../hooks/useFetch"

export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetch(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {
        loading ? <p className="animate__animated animate__flash">Loading  .....</p> : (
          <div className="card-grid">
            {
              images.map((img) => (
                <GifGridItem key={img.id} img={img} />
              ))
            }
          </div>
        )
      }
    </>
  )
}

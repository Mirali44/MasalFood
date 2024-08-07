import './FavoritesList.css'

// eslint-disable-next-line react/prop-types
function FavoritesList({data}) {
  return (
    <div className="favorites-container">
        <h1>Your Favorites</h1>
        {data ? (<p>Data yes</p>) : (<p>Data no</p>)}
    </div>
  )
}

export default FavoritesList
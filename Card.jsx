function Card({ item }) {
  return (
    <div className="card menu-item" data-test-id={`menu-item-${item.category}`}>
      <img src={item.image} alt={item.name} />
      <div className="menu-item-content">
        <h2>{item.name}</h2>
        <p className="menu-item-category">{item.category}</p>
        <p className="menu-item-description">{item.description}</p>
        <p className="menu-item-price">${item.price}</p>
      </div>
    </div>
  )
}
export default Card
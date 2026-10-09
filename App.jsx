import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [filter, setFilter] = useState(null)

  const [items] = useState(() => [
    {
      id: 1,
      name: 'Pizza Margherita',
      category: 'lunch',
      description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
      price: 12.99,
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      category: 'lunch',
      description: 'Traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      price: 14.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFA3h22S5e-Blnztd9UnhzgiCo3ygqbizdWHPf3NWoVw&s=1024'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      category: 'lunch',
      description: 'Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.',
      price: 9.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaD1N_11wwFmpmp9izXNHEI5jT3RRJXRibDrNcD_7pQ&s=10'
    },
    {
      id: 4,
      name: 'Grilled Chicken Sandwich',
      category: 'lunch',
      description: 'Grilled chicken served on a toasted bun with fresh greens.',
      price: 10.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKd_Gvf9909xUmU86rg3TQxAIsFBHAvS18kxWP4rNdg&s=10'
    },
    {
      id: 5,
      name: 'Pancakes',
      category: 'breakfast',
      description: 'Fluffy pancakes served with maple syrup.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 6,
      name: 'Avocado Toast',
      category: 'breakfast',
      description: 'Toasted bread topped with fresh avocado.',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 7,
      name: 'Chocolate Shake',
      category: 'shakes',
      description: 'A creamy chocolate milkshake.',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 8,
      name: 'Strawberry Shake',
      category: 'shakes',
      description: 'A refreshing shake made with strawberries.',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=1170&q=80'
    }
  ])
  const visibleItems = filter
    ? items.filter((item) => item.category === filter)
    : items

  return (
    <main id="main" className="menu">
      <h1>Our menu</h1>
      <div className="menu-filters">
        <button
          className={`filter-button${filter === null ? ' is-active' : ''}`}
          type="button"
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        <button
          className={`filter-button${filter === 'breakfast' ? ' is-active' : ''}`}
          type="button"
          id="filter-btn-1"
          aria-pressed={filter === 'breakfast'}
          onClick={() => setFilter('breakfast')}
        >
          Breakfast
        </button>
        <button
          className={`filter-button${filter === 'lunch' ? ' is-active' : ''}`}
          type="button"
          id="filter-btn-2"
          aria-pressed={filter === 'lunch'}
          onClick={() => setFilter('lunch')}
        >
          Lunch
        </button>
        <button
          className={`filter-button${filter === 'shakes' ? ' is-active' : ''}`}
          type="button"
          id="filter-btn-3"
          aria-pressed={filter === 'shakes'}
          onClick={() => setFilter('shakes')}
        >
          Shakes
        </button>
      </div>
      <div className="menu-items">
        {visibleItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

export default App

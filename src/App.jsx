import { useState } from 'react';
import './App.css';
import NewsGrid from './News.jsx';

function App() {
  const [category, setCategory] = useState("general");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Business" },
    { id: 3, name: "Health" },
    { id: 4, name: "Sports" },
    { id: 5, name: "Entertainment" }
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    setDropdownOpen(false);
  };

  return (
    <>
      <header>
        <h1 className='news-title'>
          News Nest
        </h1>
        <div style={{ position: "relative" }}>
            <button className='toggle-drop'
              onClick={toggleDropdown}
            >
              Categories
            </button>
            {dropdownOpen && (
              <ul className='toggle-list'>
                {categories.map((cat) => (
                  <li className='drop-cat drop-cat-bg' key={cat.id}>
                    <button className='drop-cat-bg'
                      onClick={() => handleCategoryClick(cat.name)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
      </header>
      <main>
        <nav>
          <ul className='nav-list'>
            {categories.map((cat)=>(
              <li onClick={()=>handleCategoryClick(cat.name)}>{cat.name}</li>
            ))}
          </ul>
        </nav>
        <NewsGrid category={category}/> 
      </main> 
    </>
  );
}


export default App

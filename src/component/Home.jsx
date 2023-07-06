import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import Products from './Products';
import { Carousel } from 'react-bootstrap';
import { usePagination } from '../PaginationContext';
import Pagination from './Pagination';

const Home = () => {
  const [data, setData] = useState([]);
  const { firstItemIndex, lastItemIndex } = usePagination();
  const currentItems = data.slice(firstItemIndex, lastItemIndex);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const filteredItems = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : currentItems;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category === 'All Categories' ? '' : category);
    setActiveCategory(category);
  };
  const handleCategoryClick = (e) => {
    const value = e.target.value;
    setSelectedCategory(value === 'All Categories' ? '' : value);
  };
  //Get all unique categories
  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <div className='home'>
      <div className='home_navbar'>
        <select value={selectedCategory} onChange={handleCategoryClick}>
          <option>All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        {categories.map((category, index) => (
          <span
            className={activeCategory === category ? 'active' : ''}
            key={index}
            value={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        ))}
      </div>

      <div className='home_image'>
        <Carousel activeIndex={index} onSelect={setIndex}>
          <Carousel.Item>
            <img
              className='d-block w-100 '
              src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/1500x600_Hero-Tall_01_FT._CB662389308_.jpg'
              alt='slide1'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 '
              src='https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Desktop_Tallhero_1500-X-600-BB-jan-rvised-NO-Cashback._CB411961897_.jpg'
              alt='slide2'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 '
              src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Boat/Boat_Gw_1500x600._CB660810557_.jpg'
              alt='slide3'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 '
              src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/CAT_ATF/2._CB411390334_.jpg'
              alt='slide4'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 '
              src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/catlevel/D20458164_IN_HETV_Category_level_GW_PC_Tollhero_1500x600_en_1._CB660812078_.jpg'
              alt='slide5'
            />
          </Carousel.Item>
        </Carousel>
        {/* <button
          className="carousel-control-prev"
          onClick={() => setIndex(index === 0 ? 4 : index - 1)}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          onClick={() => setIndex(index === 4 ? 0 : index + 1)}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button> */}
      </div>

      <div className='home_row'>
        {filteredItems.map((item, index) => (
          <div key={index} className='product_container'>
            <Products
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating.rate}
              image={item.image}
            />
          </div>
        ))}
      </div>
      <div>
        <Pagination
          totalItems={
            selectedCategory === '' ? data.length : filteredItems.length
          }
        />
      </div>
    </div>
  );
};

export default Home;

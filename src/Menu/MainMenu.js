import React , {useState} from 'react'
import Categories from './Categories';
import items from './data';
import Menu from './Menu';
import './Style..css'

const allCategories = ['all' , ...new Set(items.map(item => item.category))] ;
console.log(allCategories);


function MainMenu() {


  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if(category === 'all') {
        setMenu(items);
        return;
    }
    const newMenu = items.filter(item => item.category === category);
    console.log(newMenu);
    setMenu(newMenu);
    // setMenu((menu) => {
    //     return (
    //         menu.filter(item => item.category === category)
    //     )
    // })
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu = {filterMenu}></Categories>
        <Menu items = {menu}></Menu>
      </section>
    </main>
  )
}

export default MainMenu
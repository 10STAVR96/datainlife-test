import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSection } from '../../reducers/goodsReducer';

const Navbar = () => {
  const dispatch = useDispatch();
  const goods = useSelector(state => state.goods);

  const navHandleClick = (item) => {
    dispatch(setCurrentSection(item));
  }
  
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink to='/' className='nav__link' type='button'>Главная</NavLink>
        </li>
        {goods.map((item, index) => (
          <li className='nav__item' key={index}>
            <NavLink onClick={() => navHandleClick(item)} to={`/${item.rid || 'другое'}`} className='nav__link'>{item.rname || 'Другое'}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
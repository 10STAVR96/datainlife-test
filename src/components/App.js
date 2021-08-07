import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../actions/goods';
import './App.scss';
import Table from './table/Table';
import TotalField from './totalField/TotalField';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  const goods = useSelector(state => state.goods);
  const currentSection = useSelector(state => state.currentSection);

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <main className='main'>
      <div className='table-section'>
        <Navbar />
        <Switch>
          {goods.length ?
          <>
            <Route exact path='/'>
              <Table goods={goods} />
            </Route>
            {goods.map((item, index) => (
              <Route key={index} path={`/${item.rid || 'другое'}`}>
                <Table goods={currentSection} />
              </Route>
            ))}
          </>
          : null}
          <Redirect to='/' />
        </Switch>
      </div>
      <TotalField />
    </main>
  );
}

export default App;

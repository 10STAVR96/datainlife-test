import React from 'react';
import './table.scss';
import TableSection from './tableSection/TableSection';

const Table = ({ goods }) => {
  return (
    <table className='table'>
      <tbody>
        {goods.map((item, index) => (
          <TableSection key={index} goods={item.goods} name={item.rname} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
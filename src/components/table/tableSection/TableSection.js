import React from 'react';
import TableSell from './tableSell/TableSell';

const TableSection = (props) => {
  const { goods, name } = props;

  return (
    <>
      <tr>
        <th className='table__item-header'>{name || 'Другое'}</th>
      </tr>
      {goods.map((good) => (
        <TableSell key={good.gid} good={good}  />
      ))}
    </>
  );
}

export default TableSection;
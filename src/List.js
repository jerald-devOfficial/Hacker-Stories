import React, { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import { sortBy } from 'lodash';

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, 'title'),
  AUTHOR: (list) => sortBy(list, 'author'),
  COMMENT: (list) => sortBy(list, 'num_comments').reverse(),
  POINT: (list) => sortBy(list, 'points').reverse()
};

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = useState({ sortKey: 'NONE', isReverse: false });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey, isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse ? sortFunction(list).reverse() : sortFunction(list);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <span style={{ width: '40%' }}>
          <button type="button" onClick={() => handleSort('TITLE')}>
            Title
          </button>
        </span>
        <span style={{ width: '30%' }}>
          <button type="button" onClick={() => handleSort('AUTHOR')}>
            Author
          </button>
        </span>
        <span style={{ width: '10%' }}>
          <button type="button" onClick={() => handleSort('COMMENT')}>
            Comments
          </button>
        </span>
        <span style={{ width: '10%' }}>
          {' '}
          <button type="button" onClick={() => handleSort('POINT')}>
            Points
          </button>
        </span>
        <span style={{ width: '10%' }}>Actions</span>
      </div>
      {sortedList.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
};

const Item = ({ item, onRemoveItem }) => (
  <div className="item" style={{ display: 'flex' }}>
    <span style={{ width: '40%' }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: '30%' }}>{item.author}</span>
    <span style={{ width: '10%' }}>{item.num_comments}</span>
    <span style={{ width: '10%' }}>{item.points}</span>
    <span style={{ width: '10%' }}>
      <button className="button button_small" type="button" onClick={() => onRemoveItem(item)}>
        <CheckIcon size="sm" />
      </button>
    </span>
  </div>
);

export default List;

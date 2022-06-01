import React from 'react';
import {
  Collection,
  CollectionItem
} from "react-materialize";

const DishList = ({ dishNames }) => (
  <Collection header="Dishes">
    <DishItems dishNames={dishNames} />
  </Collection>
);

const DishItems = ({ dishNames }) => (
  dishNames.length === 0
    ? <NoDishItems />
    : <SomeDishList dishNames={dishNames} />
);

const NoDishItems = () => (
  <CollectionItem style={{ color: 'gray' }}>
    (Non added Yet)
  </CollectionItem>
);

const SomeDishList = ({ dishNames }) => (
  dishNames.map(dishName => (
    <CollectionItem key={dishName}>
      {dishName}
    </CollectionItem>
  ))
);

export default DishList;

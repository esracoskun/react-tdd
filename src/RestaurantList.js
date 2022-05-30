import React from 'react';
import { dataURLToBlob } from 'blob-util';
import {
  Collection,
  CollectionItem,
} from "react-materialize";

const RestaurantList = ({ restaurantNames }) => (
  <Collection header="Restaurants">
    <RestaurantItems restaurantNames={restaurantNames} />
  </Collection>
);

const RestaurantItems = ({ restaurantNames }) => (
  restaurantNames.length === 0
    ? <NoRestaurantItems />
    : <SomeRestaurantList restaurantNames={restaurantNames} />
);

const NoRestaurantItems = () => (
  <CollectionItem style={{ color: 'gray' }}>
    (Non added Yet)
  </CollectionItem>
);

const SomeRestaurantList = ({ restaurantNames }) => (
  restaurantNames.map(restaurantName => (
    <CollectionItem key={restaurantName}>
      {restaurantName}
    </CollectionItem>
  ))
);

export default RestaurantList;

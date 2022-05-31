import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(() => {
      saveHandler = jest.fn();

      wrapper = mount(<NewRestaurantForm onSave={saveHandler}/>);

      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate('change', {
          target: {
            name: 'restaurantName',
            value: 'Sushi Place'
          }
        });

      wrapper
        .find('form')
        .simulate('submit');
    });

    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
    });

    it('clears the text field', () => {
      expect(
        wrapper
          .find('input[data-test="newRestaurantName"]')
          .props().value,
      ).toEqual('');
    });
  });
});


// it('', () => {});

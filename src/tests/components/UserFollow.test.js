import React from "react";
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import UserFollow from '../../components/UserFollow/UserFollow';

describe('UserFollow component', () => {
  test("renders the UserFollow component", () => {
    const wrapper = shallow(
      <Provider>
        <UserFollow />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});

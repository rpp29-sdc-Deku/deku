/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Questions from '../components/questions_answers/Questions.jsx';

describe('Testing to confirm test infrastructure is working', () => {
  it('should add 1 and 1', () => {
    expect(1 + 1).toEqual(2);
  });
});

describe('Questions and Answers', function () {
  it('should render the Questions widget without crashing', function () {
    const wrapper = shallow(<Questions />);
    expect(wrapper.hasClass('QA')).toBeTruthy();
  });
});

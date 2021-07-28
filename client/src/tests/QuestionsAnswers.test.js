/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import QuestionsAnswers from '../components/questions_answers/QuestionsAnswers.jsx';
import QuestionList from '../components/questions_answers/QuestionList.jsx';
import Question from '../components/questions_answers/Question.jsx';
import Answer from '../components/questions_answers/Answer.jsx';

describe('Testing to confirm test infrastructure is working', () => {
  it('should add 1 and 1', () => {
    expect(1 + 1).toEqual(2);
  });
});

describe('Questions and Answers', function () {
  it('should render the Questions component without crashing', function () {
    const wrapper = shallow(<QuestionsAnswers />);
    expect(wrapper.hasClass('QA')).toBeTruthy();
  });
});

describe('Questions List', function () {
  it('should render the Questions component without crashing', function () {
    const wrapper = shallow(<QuestionList />);
    expect(wrapper.hasClass('QL')).toBeTruthy();
  });
});

describe('Question', function () {
  it('should render the Questions component without crashing', function () {
    const wrapper = shallow(<Question />);
    expect(wrapper.hasClass('Q')).toBeTruthy();
  });
});

// describe('Answer', function () {
//   it('should render the Answer component without crashing', function () {
//     const wrapper = shallow(<Answer />);
//     expect(wrapper.hasClass('A')).toBeTruthy();
//   });
// });

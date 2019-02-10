import React from 'react';
import { shallow, mount } from 'enzyme';
import { wrap } from 'module';
// import { expect } from 'chai';
import sinon from 'sinon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Post from '../../components/Post';
import { mountWrap } from '../../helpers/contextWrap'

describe('<Post />', () => {
  const getPrices = jest.fn();

  // const props = {
  //   fetching: false,
  //   error: false,
  //   prices: {},
  //   getPrices: getPrices,
  // };

  const DATA_OBJECT = {
    title: 'Reactnd Project Readable - Testing',
    author: 'Filipe Natanael',
    timestamp: '1468479767190',
    category: 'redux',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    voteScore: -5,
  }

  it('shallow renders correctly', () => {
    expect(shallow(<Post post={DATA_OBJECT} />));
  });

  it('renders a card with title whether title prop is passed', () => {
    const wrapper = mountWrap(<Post post={DATA_OBJECT} />);
    // console.log(wrapper.find('CardContent').debug());
    expect(wrapper.find(CardContent)).toHaveLength(1);
  });

  it('allows us to set props', () => {
    const wrapper = mountWrap(<Post post={DATA_OBJECT} />);
    expect(wrapper.props().post).toEqual(DATA_OBJECT);

    let newObject = { ...DATA_OBJECT, category: 'react' }
    wrapper.setProps({ post: newObject });
    expect(wrapper.props().post).toEqual(newObject);
  });

  it('when body object is not passed or nulls', () => {
    let newObject = { ...DATA_OBJECT, body: '' }
    const wrapper = mountWrap(<Post post={newObject} />);
    expect(wrapper.find(CardContent)).toHaveLength(0);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mountWrap((<IconButton onClick={onButtonClick} />));
    wrapper.find(IconButton).simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });

  it('simulates onDeletePost events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mountWrap((<Post post={DATA_OBJECT} onDeletePost={onButtonClick} />));

    expect(wrapper.find(IconButton).filterWhere((item) => {
      return item.prop('aria-label') === 'Delete Post';
    })).toHaveLength(1);

    expect(wrapper.find(IconButton).filterWhere((item) => {
      return item.prop('aria-label') === 'Delete Post';
    }).simulate('click'))

    expect(onButtonClick).toHaveProperty('callCount', 1);
  });

  // it ('calls correct function to save the information', () => {
  //   const onButtonClickMock = jest.fn();
  //   const wrapper = shallow(
  //     <BaseButton
  //       onButtonClick={onButtonClickMock}
  //     />,
  //   );
  //   const buttonElement = wrapper.find('.base-button'); // step 1 above
  //   buttonElement.simulate('click'); // step 2
  //
  //   expect(onButtonClickMock).toHaveBeenCalledTimes(1); // step 3
  //   expect(onButtonClickMock).toHaveBeenCalledWith(true);
  // });
  //
  //
  // //   console.log(wrapper.findWhere(node => node.hasClass === 'MuiButtonBase-root-59 MuiIconButton-root-53').debug());


});

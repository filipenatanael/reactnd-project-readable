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

  const POST_OBJECT = {
    title: 'Reactnd Project Readable - Testing',
    author: 'Filipe Natanael',
    timestamp: '1468479767190',
    category: 'redux',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    voteScore: -5,
  }

  const mockFetchCommentsCount = jest.fn();

  it('shallow renders correctly', () => {
    expect(shallow(<Post post={POST_OBJECT} />));
  });

  it('renders a card with title whether title prop is passed', () => {
    const wrapper = mountWrap(<Post post={POST_OBJECT} fetchCommentsCount={mockFetchCommentsCount} />);
    // console.log(wrapper.find('CardContent').debug());
    expect(wrapper.find(CardContent)).toHaveLength(1);
  });

  it('allows us to set props', () => {
    const wrapper = mountWrap(<Post post={POST_OBJECT} fetchCommentsCount={mockFetchCommentsCount} />);
    expect(wrapper.props().post).toEqual(POST_OBJECT);

    let newObject = { ...POST_OBJECT, category: 'react' }
    wrapper.setProps({ post: newObject });
    expect(wrapper.props().post).toEqual(newObject);
  });

  it('when body object is not passed or nulls', () => {
    let newObject = { ...POST_OBJECT, body: '' }
    const wrapper = mountWrap(<Post post={newObject} fetchCommentsCount={mockFetchCommentsCount} />);
    expect(wrapper.find(CardContent)).toHaveLength(0);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mountWrap(<IconButton onClick={onButtonClick} />);
    wrapper.find(IconButton).simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });

  it('simulates onDeletePost events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mountWrap((<Post post={POST_OBJECT} onDeletePost={onButtonClick} fetchCommentsCount={mockFetchCommentsCount} />));

    expect(wrapper.find(IconButton).filterWhere((item) => {
      return item.prop('aria-label') === 'Delete Post';
    })).toHaveLength(1);

    expect(wrapper.find(IconButton).filterWhere((item) => {
      return item.prop('aria-label') === 'Delete Post';
    }).simulate('click'))

    expect(onButtonClick).toHaveProperty('callCount', 1);
  });

  it('simulates on vote up events', () => {
    let voteForPost = sinon.spy();
    let wrapper = mountWrap((<Post
      post={POST_OBJECT}
      fetchCommentsCount={mockFetchCommentsCount}
      voteForPost={voteForPost} />));

    expect(wrapper.find(IconButton).filterWhere((item) => {
      return item.prop('aria-label') === 'Up Vote';
    }).simulate('click'))

    expect(voteForPost).toHaveProperty('callCount', 1);
  });

  it('simulates on vote down events', () => {
    let voteForPost = sinon.spy();
    let wrapper = mountWrap((<Post
      post={POST_OBJECT}
      fetchCommentsCount={mockFetchCommentsCount}
      voteForPost={voteForPost} />));

    expect(wrapper.find(IconButton).filterWhere((item) => {
      return item.prop('aria-label') === 'Down Vote';
    }).simulate('click'))

    expect(voteForPost).toHaveProperty('callCount', 1);
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

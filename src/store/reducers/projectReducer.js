const initState = {
  projects: [
    { id: '1', title: 'Help me find peach', content: 'blah, blah, blah' },
    { id: '2', title: 'Collect all stars', content: 'blah, blah, blah' },
    {
      id: '3',
      title: 'Egg hunts are always better with Yoshi',
      content: 'blah, blah, blah',
    },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;

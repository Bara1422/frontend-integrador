import { Components } from '../../data/data';

const INITIAL_STATE = {
  components: Components
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
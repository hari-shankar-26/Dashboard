// TodoReducer.js
import { DATA_LIST, SET_ID } from '../actions';
import { ConversationData } from '../mock-response';

const initialState = {
  conversations: ConversationData,
  selectedId: 1
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LIST:
      return {...state, coversation: action.payload.dataList}
    case SET_ID:
        return {...state, selectedId: action.payload.selectedId}
    default:
      return state;
  }
};

export default ListReducer;

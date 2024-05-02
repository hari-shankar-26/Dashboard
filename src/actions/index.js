export const DATA_LIST = 'DATA_LIST';
export const SET_ID = 'SET_ID';

export const FetchDataList = (dataList) => ({
    type: DATA_LIST,
    payload: {
        dataList
    }
})

export const setSelectedID = (selectedId) => ({
    type: SET_ID,
    payload: {
        selectedId
    }
})

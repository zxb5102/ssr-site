export default {
  SET_INFO: (state, payload) => {
    state.info = payload.info;
  },
  GET_DATA:(state) => {
    state.dataList = [1,2,3,4,5,6];
  },
  SET_PROFESSION_FIELD_DATA:(state,pro)=>{
    state.pro = pro;
  },
  CHANGE_AGENT_FLAG:(state,payload)=>{
    state.isPda = payload.value;
  }
};
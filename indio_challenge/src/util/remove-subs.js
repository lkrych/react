export const removeSubs = (state, id) => {
  Object.keys(state).forEach(key => {
    if(state[key]['subInputs'].length > 0){
      depthFirstDeletion(state[key]['subInputs'], id);
    }
  });
};

const depthFirstDeletion = (subInputsArray, objectId) => {
  if(subInputsArray.length === 0){
    return;
  }
  subInputsArray.forEach((subItem, idx) => {
    let key = Object.keys(subItem)[0];
    if(key === objectId){
      subInputsArray.splice(idx, 1);
    } else{
      depthFirstDeletion(subItem[key]['subInputs']);
    }
  });
};

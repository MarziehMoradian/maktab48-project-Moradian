// export const loadState =()=>{
//     try {
//         const serializedState=localStorage.getItem('state')
//         // console.log(serializedState);
//         if (serializedState === null) {
//             return undefined
//         }
//         return JSON.parse(serializedState)
//     } catch (error) {
//         return undefined
//     }
// }
// export const saveState=(state)=>{
// try {
//     const serializedState=JSON.stringify(state)
//     // console.log(serializedState);
//     localStorage.setItem('state',serializedState)
// } catch (error) {
//     console.log(error);
// }
// }
export const loadState = key => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return [];
      }
  
   
      const result = JSON.parse(serializedState);
      return result;
    } catch (err) {
      return [];
    }
  };
  
   
  export const saveState = (key, value) => {
    try {
      const result = JSON.stringify(value);
      localStorage.setItem(key, result);
    } catch (err) {}
  };
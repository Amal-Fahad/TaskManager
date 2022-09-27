import data from "../data.json";

const statusArray = Object.keys(data);

export const initial_State = {
  data,
  statusArray,
};

export const reducer = (prevState, action) => {
  switch (action.type) {
    case "TASKMOVE":
      let currentStatus = prevState.statusArray[action.payload._index];
      let targetStatus = prevState.statusArray[action.payload._index + 1];

      let clickedTask = prevState.data[currentStatus].find(
        (item) => item.id === action.payload._id
      );
      return {
        ...prevState,
        data: {
          ...prevState.data,
          [currentStatus]: prevState.data[currentStatus].filter(
            (item) => item.id !== action.payload._id
          ),
          [targetStatus]: [...prevState.data[targetStatus], clickedTask],
        },
      };

    default:
      return prevState;
  }
};

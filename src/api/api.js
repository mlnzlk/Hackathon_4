import axios from "axios";

const classKey = process.env.REACT_APP_KEY;

export const getSearchClass = async (identifier) => {
  try {
    const response = await axios.get(
      `https://proxy.cors.sh/https://api.everytime.kr/find/timetable/table/friend?identifier=${identifier}&friendInfo=true`,
      {
        headers: {
          "x-cors-api-key": classKey,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

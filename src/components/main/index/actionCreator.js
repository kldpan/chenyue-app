export const LOAD_TEST_DATA = "index/get_test_data";

export const loadGetTestDate = dispatch => {
  return () => {
    fetch("/apis/api/v1/topics", {
      method: "GET"
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        dispatch({
          type:LOAD_TEST_DATA,
          val:res.data
        })
      });
  };
};

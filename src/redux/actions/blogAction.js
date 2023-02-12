const URL = 'https://api.theautring.com/api/v1';


export const getAllBlogs = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });


        const { data } = await axios.post(
            `${URL}/login`,
            { email, password },
            {
                xhrFields: {
                    withCredentials: true,
                },
                withCredentials: true,
            }
        );
        console.log(data);

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error)
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
    }
};
import axios from "axios";
import {toast} from "react-toastify"
export const GetSettings = async (dispatch) => {
    const { data } = await axios.get("/siteSettings");
        if (data.error) {
          toast.error(data.error);
        } else {
        const setting=data.setting;
        dispatch({
            type:"GET_SETTINGS",
            payload:setting
        })
        }
};
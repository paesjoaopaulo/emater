import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

const apiCall =
    (
        url = "/",
        data = [],
        method = "GET",
        callbackSuccess = function (e) { console.log(e) },
        callbackFail = function (e) { console.error(e) }
    ) => {
        return axios({ url, data, method, headers: { "content-type": "application/json" } })
            .then(callbackSuccess)
            .catch(callbackFail)
    }

export default apiCall;
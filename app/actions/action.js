import axios from 'axios'
const CancelToken = axios.CancelToken;
//setting default axios post、get
export function post(url, data) {
	return axios({
		method: 'POST',
		url: url,
		data: data,     // post Data
		timeout: 60000, // timeout
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			'Accept': 'application/json;'
		},
		// cancelToken: abort ? new CancelToken(function executor(c) {
		// 	cancel = c;
		// }) : undefined
	})
		.then(response => {
			const hasToken = !!response.headers.authorization;
			console.log(response.data)
		})
		.catch((e) => { catchError(e) })
}
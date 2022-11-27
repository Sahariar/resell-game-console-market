import { useEffect, useState } from "react";

const UseToken = (email) => {
	const [token, setToken] = useState('');
	useEffect(() => {
		if (email) {
			fetch(`https://b612-used-products-resale-server-side-sahariar.vercel.app/userjwt?email=${email}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.accessUserToken) {
						localStorage.setItem("accessUserToken", data.accessUserToken);
						setToken(data.accessUserToken);
					}
				});
		}
	}, [email]);
	return [token];
};

export default UseToken;

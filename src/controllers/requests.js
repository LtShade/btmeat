async function login(
	url = "https://localhost:3443/user",
	data = JSON.stringify({ username: "ltshade", password: "Wolverine" })
) {
	fetch("https://localhost:3443/user", {
		method: "GET",
		mode: "cors",
		headers: new Headers(),
		//body: data,
	})
		.then((res) => console.log(res.json()))
		.catch((err) => console.log(err));
}

module.exports = login;

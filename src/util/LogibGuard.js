const withGuard = (Component) => {
	const Wrapper = (props) => {
		const loggedIn = localStorage.getItem("loggedIn");

		return loggedIn ? (
			(window.location.href = "/brands/dashboard")
		) : (
			<Component {...props} />
		);
	};
	return Wrapper;
};

export default withGuard;

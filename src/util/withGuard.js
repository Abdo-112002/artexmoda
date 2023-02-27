const withGuard = (Component) => {
	const Wrapper = (props) => {
		const loggedIn = localStorage.getItem("loggedIn");

		return loggedIn ? (
			<Component {...props} />
		) : (
			(window.location.href = "/brands")
		);
	};
	return Wrapper;
};

export default withGuard;

import AuthAdmin from "../common/AuthAdmin";

const withAGuard = (Component) => {
	const Wrapper = (props) => {
		const { loggedIn } = AuthAdmin();

		return loggedIn ? (
			<Component {...props} />
		) : (
			(window.location.href = "/auth/admin")
		);
	};
	return Wrapper;
};

export default withAGuard;

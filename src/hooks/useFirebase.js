import { useState, useEffect } from "react";
import initializeFirebase from "../components/Firebase/Firebase.init";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	updateProfile,
	sendPasswordResetEmail,
	getIdToken,
	signOut,
} from "firebase/auth";

// initialize firebase
initializeFirebase();

const useFirebase = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState("");

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const saveUser = (email, name, method) => {
		const user = { email, name };
		fetch("https://salty-river-06883.herokuapp.com/users", {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then();
	};

	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				setError("");
				const newUser = { email, displayName: name };
				setUser(newUser);
				// save user to database
				saveUser(email, name, "POST");
				// send name to firebases
				updateProfile(auth.currentUser, {
					displayName: name,
					photoURL: "https://dummyimage.com/100/bababa/000000",
				})
					.then(() => {
						setError("");
					})
					.catch((error) => {
						setError(error.message);
					});
				history.replace("/");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const loginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				const destination = location?.state?.from || "/";
				history.replace(destination);
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const googleSignIn = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// The signed-in user info.
				// const user = result.user;
				const destination = location?.state?.from || "/";
				history.replace(destination);
				setError("");
				saveUser(result.user.email, result.user.displayName, "PUT");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const forgotPassword = (email, location, history) => {
		setIsLoading(true);
		sendPasswordResetEmail(auth, email)
			.then(() => {
				const destination = location?.state?.from || "/";
				history.replace(destination);
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// observe user state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// const uid = user.uid;
				setUser(user);
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, [auth]);

	useEffect(() => {
		fetch(`https://salty-river-06883.herokuapp.com/users/${user.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data.admin));
	}, [user.email]);

	const logout = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	return {
		user,
		error,
		isLoading,
		registerUser,
		loginUser,
		googleSignIn,
		forgotPassword,
		admin,
		token,
		logout,
	};
};

export default useFirebase;

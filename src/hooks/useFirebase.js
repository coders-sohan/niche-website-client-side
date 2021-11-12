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
	signOut,
} from "firebase/auth";

// initialize firebase
initializeFirebase();

const useFirebase = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState({});
	const [error, setError] = useState("");

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				setError("");
				const newUser = { email, displayName: name };
				setUser(newUser);
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
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, []);

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
		logout,
	};
};

export default useFirebase;

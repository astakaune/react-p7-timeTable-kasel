import firebase from "./firebase";

export const getAllWorks = (onWorkChanged) => {
	firebase
		.firestore()
		.collection("times")
		.onSnapshot((snapshot) => {
			const newWork = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			onWorkChanged(newWork);
		});
};
//destytojo
// export const addWork = (data, onSuccess) => {
// 	firebase.firestore().collection("times").add(data).then(onSuccess());
// };

export const addWork = (data) => {
	firebase.firestore().collection("times").add(data);
};

export const showById = (item, id) => {
	firebase
		.firestore()
		.collection("times")
		.doc(id)
		.get()
		.then((docRef) => {
			item(docRef.data());
		});
};

export const deleteWork = (id) => {
	firebase.firestore().collection("times").doc(id).delete();
};
export const updateWork = (id, data) => {
	firebase.firestore().collection("times").doc(id).set(data);
};

// import firebase from "./firebase";

// // Get all data
// export const getAllWorks = (onWorkChanged) => {
// 	firebase
// 		.firestore()
// 		.collection("Tasks")
// 		.onSnapshot((snapshot) => {
// 			const newWork = snapshot.docs.map((doc) => ({
// 				id: doc.id,
// 				...doc.data(),
// 			}));
// 			onWorkChanged(newWork);
// 		})
//
// };

// // add work
// export const addWork = (data) => {
// 	firebase //duomenys is DB
// 		.firestore() //metodas
// 		.collection("Tasks") //dest. collection  pavadinta times
// 		.add(data);
// };

// //
// export const showById = () => {};

// export const deleteWork = (id) => {
// 	firebase.firestore().collection("Tasks").doc(id).delete();
// };

// export const updateWork = () => {};

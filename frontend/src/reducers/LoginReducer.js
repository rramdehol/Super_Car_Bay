export default function (state=[], action){
	console.log(action.type);
	console.log(action.payload)
	switch(action.type){
		case "LOGIN":
			console.log("I'm the login reducer");
			// console.log(action.payload);
			return action.payload
	}
	return state;
}
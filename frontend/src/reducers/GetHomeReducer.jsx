export default function (state=null, action){
	console.log(action.type);
	switch(action.type){
		case "GET_HOME":
			console.log("I'm the getHomereducer")
			return action.payload

	}
	return state;
}
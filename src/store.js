import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import { get_photos } from "./actions";
//import { pega_usuarios } from "./actions/index";

const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');

const host = 'http://localhost:3030'
const socket = io(host)
export const app = feathers()

app.configure(socketio(socket)).service("instadb")
.on("patched", message => get_photos());

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));

const store = createStore(rootReducer, middleware);

export default store
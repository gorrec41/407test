import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {setupStore} from './store/store';
import { createRoot } from "react-dom/client"


const root = createRoot(document.getElementById("root") as HTMLElement)
const store=setupStore();

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

// Instruments
import { store } from './init/store';
import { history } from './init/middleware/core';

// App
import App from './navigation/App';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);

// ToDo: Собрать название и цену ингредиента для отпрпаки на сервер.
// ToDo: Проверить валидацию Формы отправки
// ToDo: Удалить ANTD

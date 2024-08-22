// Указываем, что этот компонент будет рендериться на клиенте
'use client';

// Импортируем хук useState из React для работы с состоянием компонента
import { useState } from 'react';

// Определяем компонент Home, который будет отображать страницу
export default function Home() {
    // Определяем состояние для хранения данных, полученных с API
    const [fetchData, setFetchData] = useState(null);
    const [getData, setGetData] = useState(null);
    // Определяем состояние для хранения текста запроса
    const [requestText, setRequestText] = useState('');

    // Функция для обработки нажатия кнопки "Fetch Post"
    const handleFetchPost = async () => {
        try {
            // Делаем запрос к внешнему API, чтобы получить данные поста
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            // Преобразуем ответ в формат JSON
            const data = await response.json();
            // Обновляем состояние fetchData с полученными данными
            setFetchData(data);
            // Обновляем состояние requestText для отображения полученных данных
            setRequestText(`Fetched data: ${JSON.stringify(data)}`);
        } catch (error) {
            // В случае ошибки, обновляем состояние requestText с сообщением об ошибке
            setRequestText('Error fetching data');
        }
    };

    // Функция для обработки нажатия кнопки "GET Request"
    const handleGetRequest = async () => {
        try {
            // Делаем запрос к нашему собственному API маршруту
            const response = await fetch('/api/hello');
            // Преобразуем ответ в формат JSON
            const data = await response.json();
            // Обновляем состояние getData с полученными данными
            setGetData(data);
            // Обновляем состояние requestText для отображения полученных данных
            setRequestText(`GET request data: ${JSON.stringify(data)}`);
        } catch (error) {
            // В случае ошибки, обновляем состояние requestText с сообщением об ошибке
            setRequestText('Error with GET request');
        }
    };

    // Возвращаем JSX для отображения на странице
    return (
        <div style={{ padding: '20px' }}>
            <h1>Next.js API Fetch Example</h1>
            {/* Кнопка для вызова функции handleFetchPost */}
            <button onClick={handleFetchPost}>Fetch Post</button>
            {/* Кнопка для вызова функции handleGetRequest */}
            <button onClick={handleGetRequest}>GET Request</button>
            <div style={{ marginTop: '20px' }}>
                <h2>Response:</h2>
                {/* Отображаем текст запроса */}
                <pre>{requestText}</pre>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h2>Fetched Post Data:</h2>
                {/* Отображаем данные поста, полученные через Fetch API */}
                <pre>{JSON.stringify(fetchData, null, 2)}</pre>
                <h2>GET Request Data:</h2>
                {/* Отображаем данные, полученные через GET запрос к нашему API маршруту */}
                <pre>{JSON.stringify(getData, null, 2)}</pre>
            </div>
        </div>
    );
}

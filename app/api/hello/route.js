// Этот файл определяет API маршрут для обработки GET запросов

// Функция для обработки GET запросов
export async function GET() {
    // Возвращаем JSON-ответ с сообщением "Hello from API!"
    return new Response(JSON.stringify({ message: 'Hello from API!' }), {
        headers: { 'Content-Type': 'application/json' }, // Устанавливаем заголовок типа содержимого
    });
}

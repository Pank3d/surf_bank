import axios, {
	type AxiosRequestConfig,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from 'axios';

// Создаём инстанс
const instance = axios.create({
	baseURL: 'https://tp2.tst-apidmndelss.com',
	timeout: 30000,
	headers: { 'Content-Type': 'application/json' },
});

// Интерцептор запроса
instance.interceptors.request.use(
	(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
		const token = localStorage.getItem('auth_token');

		if (token) {
			// Безопасное присвоение: заголовки гарантированно существуют
			config.headers = config.headers ?? {};
			(config.headers as Record<string, string>)[
				'Authorization'
			] = `Bearer ${token}`;
		}

		console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
		return config;
	}
);

// Интерцептор ответа
instance.interceptors.response.use(
	(response: AxiosResponse) => response,
	error => Promise.reject(error)
);

// Mutator для Orval
export async function customInstance<T>(
	options: AxiosRequestConfig
): Promise<T> {
	const response = await instance.request<T>(options);
	return response.data;
}

import { customInstance } from './axios-instance';
import * as Generated from './generated';

export const api = {
	...Generated,
	axios: customInstance,
};

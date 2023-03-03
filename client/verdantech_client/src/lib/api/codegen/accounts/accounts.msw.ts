/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * VerdanTech-API
 * API of the VerdanTech Project Web Application
 * OpenAPI spec version: 0.1.0
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getAccountsPasswordChangeCreateMock = () => ({ detail: faker.random.word() });

export const getAccountsPasswordResetCreateMock = () => ({ email: faker.internet.email() });

export const getAccountsPasswordResetConfirmCreateMock = () => ({
	new_password1: faker.random.word(),
	new_password2: faker.random.word(),
	uid: faker.random.word(),
	token: faker.random.word()
});

export const getAccountsRegistrationCreateMock = () => ({
	username: faker.random.word(),
	email: faker.internet.email()
});

export const getAccountsRegistrationResendEmailCreateMock = () => ({
	email: faker.internet.email()
});

export const getAccountsMSW = () => [
	rest.post('*/api/accounts/password/change', (_req, res, ctx) => {
		return res(
			ctx.delay(1000),
			ctx.status(200, 'Mocked status'),
			ctx.json(getAccountsPasswordChangeCreateMock())
		);
	}),
	rest.post('*/api/accounts/password/reset', (_req, res, ctx) => {
		return res(
			ctx.delay(1000),
			ctx.status(200, 'Mocked status'),
			ctx.json(getAccountsPasswordResetCreateMock())
		);
	}),
	rest.post('*/api/accounts/password/reset/confirm', (_req, res, ctx) => {
		return res(
			ctx.delay(1000),
			ctx.status(200, 'Mocked status'),
			ctx.json(getAccountsPasswordResetConfirmCreateMock())
		);
	}),
	rest.post('*/api/accounts/registration', (_req, res, ctx) => {
		return res(
			ctx.delay(1000),
			ctx.status(200, 'Mocked status'),
			ctx.json(getAccountsRegistrationCreateMock())
		);
	}),
	rest.post('*/api/accounts/registration/resend_email', (_req, res, ctx) => {
		return res(
			ctx.delay(1000),
			ctx.status(200, 'Mocked status'),
			ctx.json(getAccountsRegistrationResendEmailCreateMock())
		);
	}),
	rest.post('*/api/accounts/registration/verify_email', (_req, res, ctx) => {
		return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
	})
];

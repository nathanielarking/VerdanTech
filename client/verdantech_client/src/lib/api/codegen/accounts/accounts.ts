/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * VerdanTech-API
 * API of the VerdanTech Project Web Application
 * OpenAPI spec version: 0.1.0
 */
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { createMutation } from '@tanstack/svelte-query';
import type { CreateMutationOptions, MutationFunction } from '@tanstack/svelte-query';
import type {
	RestAuthDetail,
	PasswordChangeRequest,
	PasswordReset,
	PasswordResetRequest,
	PasswordResetConfirm,
	PasswordResetConfirmRequest,
	Register,
	RegisterRequest,
	ResendEmailVerification,
	ResendEmailVerificationRequest,
	VerifyEmailRequest
} from '../verdanTechAPI.schemas';

/**
 * Calls Django Auth SetPasswordForm save method.

Accepts the following POST parameters: new_password1, new_password2
Returns the success/fail message.
 */
export const accountsPasswordChangeCreate = (
	passwordChangeRequest: PasswordChangeRequest,
	options?: AxiosRequestConfig
): Promise<AxiosResponse<RestAuthDetail>> => {
	return axios.post(`/api/accounts/password/change`, passwordChangeRequest, options);
};

export type AccountsPasswordChangeCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsPasswordChangeCreate>>
>;
export type AccountsPasswordChangeCreateMutationBody = PasswordChangeRequest;
export type AccountsPasswordChangeCreateMutationError = AxiosError<unknown>;

export const createAccountsPasswordChangeCreate = <
	TError = AxiosError<unknown>,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsPasswordChangeCreate>>,
		TError,
		{ data: PasswordChangeRequest },
		TContext
	>;
	axios?: AxiosRequestConfig;
}) => {
	const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsPasswordChangeCreate>>,
		{ data: PasswordChangeRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsPasswordChangeCreate(data, axiosOptions);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsPasswordChangeCreate>>,
		TError,
		{ data: PasswordChangeRequest },
		TContext
	>(mutationFn, mutationOptions);
};
/**
 * Calls Django Auth PasswordResetForm save method.

Accepts the following POST parameters: email
Returns the success/fail message.
 */
export const accountsPasswordResetCreate = (
	passwordResetRequest: PasswordResetRequest,
	options?: AxiosRequestConfig
): Promise<AxiosResponse<PasswordReset>> => {
	return axios.post(`/api/accounts/password/reset`, passwordResetRequest, options);
};

export type AccountsPasswordResetCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsPasswordResetCreate>>
>;
export type AccountsPasswordResetCreateMutationBody = PasswordResetRequest;
export type AccountsPasswordResetCreateMutationError = AxiosError<unknown>;

export const createAccountsPasswordResetCreate = <
	TError = AxiosError<unknown>,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsPasswordResetCreate>>,
		TError,
		{ data: PasswordResetRequest },
		TContext
	>;
	axios?: AxiosRequestConfig;
}) => {
	const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsPasswordResetCreate>>,
		{ data: PasswordResetRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsPasswordResetCreate(data, axiosOptions);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsPasswordResetCreate>>,
		TError,
		{ data: PasswordResetRequest },
		TContext
	>(mutationFn, mutationOptions);
};
/**
 * Password reset e-mail link is confirmed, therefore
this resets the user's password.

Accepts the following POST parameters: token, uid,
    new_password1, new_password2
Returns the success/fail message.
 */
export const accountsPasswordResetConfirmCreate = (
	passwordResetConfirmRequest: PasswordResetConfirmRequest,
	options?: AxiosRequestConfig
): Promise<AxiosResponse<PasswordResetConfirm>> => {
	return axios.post(`/api/accounts/password/reset/confirm`, passwordResetConfirmRequest, options);
};

export type AccountsPasswordResetConfirmCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsPasswordResetConfirmCreate>>
>;
export type AccountsPasswordResetConfirmCreateMutationBody = PasswordResetConfirmRequest;
export type AccountsPasswordResetConfirmCreateMutationError = AxiosError<unknown>;

export const createAccountsPasswordResetConfirmCreate = <
	TError = AxiosError<unknown>,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsPasswordResetConfirmCreate>>,
		TError,
		{ data: PasswordResetConfirmRequest },
		TContext
	>;
	axios?: AxiosRequestConfig;
}) => {
	const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsPasswordResetConfirmCreate>>,
		{ data: PasswordResetConfirmRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsPasswordResetConfirmCreate(data, axiosOptions);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsPasswordResetConfirmCreate>>,
		TError,
		{ data: PasswordResetConfirmRequest },
		TContext
	>(mutationFn, mutationOptions);
};
export const accountsRegistrationCreate = (
	registerRequest: RegisterRequest,
	options?: AxiosRequestConfig
): Promise<AxiosResponse<Register>> => {
	return axios.post(`/api/accounts/registration`, registerRequest, options);
};

export type AccountsRegistrationCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsRegistrationCreate>>
>;
export type AccountsRegistrationCreateMutationBody = RegisterRequest;
export type AccountsRegistrationCreateMutationError = AxiosError<unknown>;

export const createAccountsRegistrationCreate = <
	TError = AxiosError<unknown>,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsRegistrationCreate>>,
		TError,
		{ data: RegisterRequest },
		TContext
	>;
	axios?: AxiosRequestConfig;
}) => {
	const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsRegistrationCreate>>,
		{ data: RegisterRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsRegistrationCreate(data, axiosOptions);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsRegistrationCreate>>,
		TError,
		{ data: RegisterRequest },
		TContext
	>(mutationFn, mutationOptions);
};
export const accountsRegistrationResendEmailCreate = (
	resendEmailVerificationRequest: ResendEmailVerificationRequest,
	options?: AxiosRequestConfig
): Promise<AxiosResponse<ResendEmailVerification>> => {
	return axios.post(
		`/api/accounts/registration/resend_email`,
		resendEmailVerificationRequest,
		options
	);
};

export type AccountsRegistrationResendEmailCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsRegistrationResendEmailCreate>>
>;
export type AccountsRegistrationResendEmailCreateMutationBody = ResendEmailVerificationRequest;
export type AccountsRegistrationResendEmailCreateMutationError = AxiosError<unknown>;

export const createAccountsRegistrationResendEmailCreate = <
	TError = AxiosError<unknown>,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsRegistrationResendEmailCreate>>,
		TError,
		{ data: ResendEmailVerificationRequest },
		TContext
	>;
	axios?: AxiosRequestConfig;
}) => {
	const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsRegistrationResendEmailCreate>>,
		{ data: ResendEmailVerificationRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsRegistrationResendEmailCreate(data, axiosOptions);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsRegistrationResendEmailCreate>>,
		TError,
		{ data: ResendEmailVerificationRequest },
		TContext
	>(mutationFn, mutationOptions);
};
export const accountsRegistrationVerifyEmailCreate = (
	verifyEmailRequest: VerifyEmailRequest,
	options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
	return axios.post(`/api/accounts/registration/verify_email`, verifyEmailRequest, options);
};

export type AccountsRegistrationVerifyEmailCreateMutationResult = NonNullable<
	Awaited<ReturnType<typeof accountsRegistrationVerifyEmailCreate>>
>;
export type AccountsRegistrationVerifyEmailCreateMutationBody = VerifyEmailRequest;
export type AccountsRegistrationVerifyEmailCreateMutationError = AxiosError<unknown>;

export const createAccountsRegistrationVerifyEmailCreate = <
	TError = AxiosError<unknown>,
	TContext = unknown
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<typeof accountsRegistrationVerifyEmailCreate>>,
		TError,
		{ data: VerifyEmailRequest },
		TContext
	>;
	axios?: AxiosRequestConfig;
}) => {
	const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof accountsRegistrationVerifyEmailCreate>>,
		{ data: VerifyEmailRequest }
	> = (props) => {
		const { data } = props ?? {};

		return accountsRegistrationVerifyEmailCreate(data, axiosOptions);
	};

	return createMutation<
		Awaited<ReturnType<typeof accountsRegistrationVerifyEmailCreate>>,
		TError,
		{ data: VerifyEmailRequest },
		TContext
	>(mutationFn, mutationOptions);
};

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendshipsCreateFormInputValues = {
    friendshipStatus?: string;
    updatedBy?: string;
};
export declare type FriendshipsCreateFormValidationValues = {
    friendshipStatus?: ValidationFunction<string>;
    updatedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendshipsCreateFormOverridesProps = {
    FriendshipsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    friendshipStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    updatedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FriendshipsCreateFormProps = React.PropsWithChildren<{
    overrides?: FriendshipsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FriendshipsCreateFormInputValues) => FriendshipsCreateFormInputValues;
    onSuccess?: (fields: FriendshipsCreateFormInputValues) => void;
    onError?: (fields: FriendshipsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendshipsCreateFormInputValues) => FriendshipsCreateFormInputValues;
    onValidate?: FriendshipsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FriendshipsCreateForm(props: FriendshipsCreateFormProps): React.ReactElement;

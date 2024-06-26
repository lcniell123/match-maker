/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Friendships } from "../API.ts";
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
export declare type FriendshipsUpdateFormInputValues = {
    friendshipStatus?: string;
    updatedBy?: string;
};
export declare type FriendshipsUpdateFormValidationValues = {
    friendshipStatus?: ValidationFunction<string>;
    updatedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendshipsUpdateFormOverridesProps = {
    FriendshipsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    friendshipStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    updatedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FriendshipsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FriendshipsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    friendships?: Friendships;
    onSubmit?: (fields: FriendshipsUpdateFormInputValues) => FriendshipsUpdateFormInputValues;
    onSuccess?: (fields: FriendshipsUpdateFormInputValues) => void;
    onError?: (fields: FriendshipsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendshipsUpdateFormInputValues) => FriendshipsUpdateFormInputValues;
    onValidate?: FriendshipsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FriendshipsUpdateForm(props: FriendshipsUpdateFormProps): React.ReactElement;

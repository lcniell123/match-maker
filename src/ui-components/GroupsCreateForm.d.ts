/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type GroupsCreateFormInputValues = {
    description?: string;
    name?: string;
    image?: string;
    updatedAt?: string;
    createdAt?: string;
};
export declare type GroupsCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupsCreateFormOverridesProps = {
    GroupsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupsCreateFormProps = React.PropsWithChildren<{
    overrides?: GroupsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GroupsCreateFormInputValues) => GroupsCreateFormInputValues;
    onSuccess?: (fields: GroupsCreateFormInputValues) => void;
    onError?: (fields: GroupsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupsCreateFormInputValues) => GroupsCreateFormInputValues;
    onValidate?: GroupsCreateFormValidationValues;
} & React.CSSProperties>;
export default function GroupsCreateForm(props: GroupsCreateFormProps): React.ReactElement;

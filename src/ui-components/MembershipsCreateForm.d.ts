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
export declare type MembershipsCreateFormInputValues = {
    createdAt?: string;
    updatedAt?: string;
    status?: string;
};
export declare type MembershipsCreateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MembershipsCreateFormOverridesProps = {
    MembershipsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MembershipsCreateFormProps = React.PropsWithChildren<{
    overrides?: MembershipsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MembershipsCreateFormInputValues) => MembershipsCreateFormInputValues;
    onSuccess?: (fields: MembershipsCreateFormInputValues) => void;
    onError?: (fields: MembershipsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MembershipsCreateFormInputValues) => MembershipsCreateFormInputValues;
    onValidate?: MembershipsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MembershipsCreateForm(props: MembershipsCreateFormProps): React.ReactElement;

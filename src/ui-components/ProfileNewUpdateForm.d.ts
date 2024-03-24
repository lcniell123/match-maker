/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ProfileNew } from "../API.ts";
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
export declare type ProfileNewUpdateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type ProfileNewUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileNewUpdateFormOverridesProps = {
    ProfileNewUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileNewUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfileNewUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profileNew?: ProfileNew;
    onSubmit?: (fields: ProfileNewUpdateFormInputValues) => ProfileNewUpdateFormInputValues;
    onSuccess?: (fields: ProfileNewUpdateFormInputValues) => void;
    onError?: (fields: ProfileNewUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileNewUpdateFormInputValues) => ProfileNewUpdateFormInputValues;
    onValidate?: ProfileNewUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileNewUpdateForm(props: ProfileNewUpdateFormProps): React.ReactElement;

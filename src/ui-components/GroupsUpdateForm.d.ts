/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Groups } from "../API.ts";
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
export declare type GroupsUpdateFormInputValues = {
    groupId?: string;
    name?: string;
    createdBy?: string;
    createdAt?: string;
    updatedAt?: string;
    image?: string;
};
export declare type GroupsUpdateFormValidationValues = {
    groupId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupsUpdateFormOverridesProps = {
    GroupsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    groupId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupsUpdateFormProps = React.PropsWithChildren<{
    overrides?: GroupsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    groups?: Groups;
    onSubmit?: (fields: GroupsUpdateFormInputValues) => GroupsUpdateFormInputValues;
    onSuccess?: (fields: GroupsUpdateFormInputValues) => void;
    onError?: (fields: GroupsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupsUpdateFormInputValues) => GroupsUpdateFormInputValues;
    onValidate?: GroupsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GroupsUpdateForm(props: GroupsUpdateFormProps): React.ReactElement;

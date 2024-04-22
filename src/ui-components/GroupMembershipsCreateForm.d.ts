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
export declare type GroupMembershipsCreateFormInputValues = {
    membershipID?: string;
    groupId?: string;
    userId?: string;
};
export declare type GroupMembershipsCreateFormValidationValues = {
    membershipID?: ValidationFunction<string>;
    groupId?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupMembershipsCreateFormOverridesProps = {
    GroupMembershipsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    membershipID?: PrimitiveOverrideProps<TextFieldProps>;
    groupId?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupMembershipsCreateFormProps = React.PropsWithChildren<{
    overrides?: GroupMembershipsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GroupMembershipsCreateFormInputValues) => GroupMembershipsCreateFormInputValues;
    onSuccess?: (fields: GroupMembershipsCreateFormInputValues) => void;
    onError?: (fields: GroupMembershipsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupMembershipsCreateFormInputValues) => GroupMembershipsCreateFormInputValues;
    onValidate?: GroupMembershipsCreateFormValidationValues;
} & React.CSSProperties>;
export default function GroupMembershipsCreateForm(props: GroupMembershipsCreateFormProps): React.ReactElement;

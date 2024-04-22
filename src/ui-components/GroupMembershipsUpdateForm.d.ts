/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { GroupMemberships } from "../API.ts";
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
export declare type GroupMembershipsUpdateFormInputValues = {
    membershipID?: string;
    groupId?: string;
    userId?: string;
};
export declare type GroupMembershipsUpdateFormValidationValues = {
    membershipID?: ValidationFunction<string>;
    groupId?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupMembershipsUpdateFormOverridesProps = {
    GroupMembershipsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    membershipID?: PrimitiveOverrideProps<TextFieldProps>;
    groupId?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupMembershipsUpdateFormProps = React.PropsWithChildren<{
    overrides?: GroupMembershipsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    groupMemberships?: GroupMemberships;
    onSubmit?: (fields: GroupMembershipsUpdateFormInputValues) => GroupMembershipsUpdateFormInputValues;
    onSuccess?: (fields: GroupMembershipsUpdateFormInputValues) => void;
    onError?: (fields: GroupMembershipsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupMembershipsUpdateFormInputValues) => GroupMembershipsUpdateFormInputValues;
    onValidate?: GroupMembershipsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GroupMembershipsUpdateForm(props: GroupMembershipsUpdateFormProps): React.ReactElement;

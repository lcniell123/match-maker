/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { Memberships } from "../API.js";
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
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type MembershipsUpdateFormInputValues = {
  status?: string;
};
export declare type MembershipsUpdateFormValidationValues = {
  status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type MembershipsUpdateFormOverridesProps = {
  MembershipsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MembershipsUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: MembershipsUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    memberships?: Memberships;
    onSubmit?: (
      fields: MembershipsUpdateFormInputValues
    ) => MembershipsUpdateFormInputValues;
    onSuccess?: (fields: MembershipsUpdateFormInputValues) => void;
    onError?: (
      fields: MembershipsUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: MembershipsUpdateFormInputValues
    ) => MembershipsUpdateFormInputValues;
    onValidate?: MembershipsUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function MembershipsUpdateForm(
  props: MembershipsUpdateFormProps
): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { Matches } from "../API.js";
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
export declare type MatchesUpdateFormInputValues = {};
export declare type MatchesUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type MatchesUpdateFormOverridesProps = {
  MatchesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type MatchesUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: MatchesUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    matches?: Matches;
    onSubmit?: (
      fields: MatchesUpdateFormInputValues
    ) => MatchesUpdateFormInputValues;
    onSuccess?: (fields: MatchesUpdateFormInputValues) => void;
    onError?: (
      fields: MatchesUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: MatchesUpdateFormInputValues
    ) => MatchesUpdateFormInputValues;
    onValidate?: MatchesUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function MatchesUpdateForm(
  props: MatchesUpdateFormProps
): React.ReactElement;

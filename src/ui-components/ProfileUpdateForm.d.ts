/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Profile } from "../API.ts";
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
export declare type ProfileUpdateFormInputValues = {
    name?: string;
    description?: string;
    username?: string;
    bio?: string;
    photo?: string;
    coverPhoto?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    country?: string;
    timeZone?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    language?: string;
    favoriteGame?: string;
    preferredGenre?: string;
    timeAvailability?: string;
    preferredTeammateAgeRange?: string;
    skillLevel?: string;
    preferredGameMode?: string;
    preferredRole?: string;
    playStyle?: string;
    flexibility?: boolean;
    behavior?: string;
    communicationPreference?: string;
    toleranceLevel?: string;
    teamworkLevel?: string;
    competitivenessLevel?: string;
};
export declare type ProfileUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    coverPhoto?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    country?: ValidationFunction<string>;
    timeZone?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    postalCode?: ValidationFunction<string>;
    language?: ValidationFunction<string>;
    favoriteGame?: ValidationFunction<string>;
    preferredGenre?: ValidationFunction<string>;
    timeAvailability?: ValidationFunction<string>;
    preferredTeammateAgeRange?: ValidationFunction<string>;
    skillLevel?: ValidationFunction<string>;
    preferredGameMode?: ValidationFunction<string>;
    preferredRole?: ValidationFunction<string>;
    playStyle?: ValidationFunction<string>;
    flexibility?: ValidationFunction<boolean>;
    behavior?: ValidationFunction<string>;
    communicationPreference?: ValidationFunction<string>;
    toleranceLevel?: ValidationFunction<string>;
    teamworkLevel?: ValidationFunction<string>;
    competitivenessLevel?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileUpdateFormOverridesProps = {
    ProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    coverPhoto?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    timeZone?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    postalCode?: PrimitiveOverrideProps<TextFieldProps>;
    language?: PrimitiveOverrideProps<TextFieldProps>;
    favoriteGame?: PrimitiveOverrideProps<TextFieldProps>;
    preferredGenre?: PrimitiveOverrideProps<TextFieldProps>;
    timeAvailability?: PrimitiveOverrideProps<TextFieldProps>;
    preferredTeammateAgeRange?: PrimitiveOverrideProps<TextFieldProps>;
    skillLevel?: PrimitiveOverrideProps<TextFieldProps>;
    preferredGameMode?: PrimitiveOverrideProps<TextFieldProps>;
    preferredRole?: PrimitiveOverrideProps<TextFieldProps>;
    playStyle?: PrimitiveOverrideProps<TextFieldProps>;
    flexibility?: PrimitiveOverrideProps<SwitchFieldProps>;
    behavior?: PrimitiveOverrideProps<TextFieldProps>;
    communicationPreference?: PrimitiveOverrideProps<TextFieldProps>;
    toleranceLevel?: PrimitiveOverrideProps<TextFieldProps>;
    teamworkLevel?: PrimitiveOverrideProps<TextFieldProps>;
    competitivenessLevel?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profile?: Profile;
    onSubmit?: (fields: ProfileUpdateFormInputValues) => ProfileUpdateFormInputValues;
    onSuccess?: (fields: ProfileUpdateFormInputValues) => void;
    onError?: (fields: ProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileUpdateFormInputValues) => ProfileUpdateFormInputValues;
    onValidate?: ProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileUpdateForm(props: ProfileUpdateFormProps): React.ReactElement;

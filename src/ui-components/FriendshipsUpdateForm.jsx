/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getFriendships } from "../graphql/queries";
import { updateFriendships } from "../graphql/mutations";
const client = generateClient();
export default function FriendshipsUpdateForm(props) {
  const {
    id: idProp,
    friendships: friendshipsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    friendshipStatus: "",
    updatedBy: "",
  };
  const [friendshipStatus, setFriendshipStatus] = React.useState(
    initialValues.friendshipStatus
  );
  const [updatedBy, setUpdatedBy] = React.useState(initialValues.updatedBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = friendshipsRecord
      ? { ...initialValues, ...friendshipsRecord }
      : initialValues;
    setFriendshipStatus(cleanValues.friendshipStatus);
    setUpdatedBy(cleanValues.updatedBy);
    setErrors({});
  };
  const [friendshipsRecord, setFriendshipsRecord] =
    React.useState(friendshipsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFriendships.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFriendships
        : friendshipsModelProp;
      setFriendshipsRecord(record);
    };
    queryData();
  }, [idProp, friendshipsModelProp]);
  React.useEffect(resetStateValues, [friendshipsRecord]);
  const validations = {
    friendshipStatus: [],
    updatedBy: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          friendshipStatus: friendshipStatus ?? null,
          updatedBy: updatedBy ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateFriendships.replaceAll("__typename", ""),
            variables: {
              input: {
                id: friendshipsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FriendshipsUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Friendship status"
        placeholder="Please select an option"
        isDisabled={false}
        value={friendshipStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              friendshipStatus: value,
              updatedBy,
            };
            const result = onChange(modelFields);
            value = result?.friendshipStatus ?? value;
          }
          if (errors.friendshipStatus?.hasError) {
            runValidationTasks("friendshipStatus", value);
          }
          setFriendshipStatus(value);
        }}
        onBlur={() => runValidationTasks("friendshipStatus", friendshipStatus)}
        errorMessage={errors.friendshipStatus?.errorMessage}
        hasError={errors.friendshipStatus?.hasError}
        {...getOverrideProps(overrides, "friendshipStatus")}
      >
        <option
          children="Friend"
          value="FRIEND"
          {...getOverrideProps(overrides, "friendshipStatusoption0")}
        ></option>
        <option
          children="Blocked"
          value="BLOCKED"
          {...getOverrideProps(overrides, "friendshipStatusoption1")}
        ></option>
        <option
          children="Removed"
          value="REMOVED"
          {...getOverrideProps(overrides, "friendshipStatusoption2")}
        ></option>
        <option
          children="Group"
          value="GROUP"
          {...getOverrideProps(overrides, "friendshipStatusoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Updated by"
        isRequired={false}
        isReadOnly={false}
        value={updatedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              friendshipStatus,
              updatedBy: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedBy ?? value;
          }
          if (errors.updatedBy?.hasError) {
            runValidationTasks("updatedBy", value);
          }
          setUpdatedBy(value);
        }}
        onBlur={() => runValidationTasks("updatedBy", updatedBy)}
        errorMessage={errors.updatedBy?.errorMessage}
        hasError={errors.updatedBy?.hasError}
        {...getOverrideProps(overrides, "updatedBy")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || friendshipsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || friendshipsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

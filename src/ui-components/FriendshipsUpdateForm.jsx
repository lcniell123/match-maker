/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
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
    friendshipId: "",
    userId: "",
    friendId: "",
    status: "",
  };
  const [friendshipId, setFriendshipId] = React.useState(
    initialValues.friendshipId
  );
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [friendId, setFriendId] = React.useState(initialValues.friendId);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = friendshipsRecord
      ? { ...initialValues, ...friendshipsRecord }
      : initialValues;
    setFriendshipId(cleanValues.friendshipId);
    setUserId(cleanValues.userId);
    setFriendId(cleanValues.friendId);
    setStatus(cleanValues.status);
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
    friendshipId: [{ type: "Required" }],
    userId: [],
    friendId: [],
    status: [],
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
          friendshipId,
          userId: userId ?? null,
          friendId: friendId ?? null,
          status: status ?? null,
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
      <TextField
        label="Friendship id"
        isRequired={true}
        isReadOnly={false}
        value={friendshipId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              friendshipId: value,
              userId,
              friendId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.friendshipId ?? value;
          }
          if (errors.friendshipId?.hasError) {
            runValidationTasks("friendshipId", value);
          }
          setFriendshipId(value);
        }}
        onBlur={() => runValidationTasks("friendshipId", friendshipId)}
        errorMessage={errors.friendshipId?.errorMessage}
        hasError={errors.friendshipId?.hasError}
        {...getOverrideProps(overrides, "friendshipId")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              friendshipId,
              userId: value,
              friendId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="Friend id"
        isRequired={false}
        isReadOnly={false}
        value={friendId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              friendshipId,
              userId,
              friendId: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.friendId ?? value;
          }
          if (errors.friendId?.hasError) {
            runValidationTasks("friendId", value);
          }
          setFriendId(value);
        }}
        onBlur={() => runValidationTasks("friendId", friendId)}
        errorMessage={errors.friendId?.errorMessage}
        hasError={errors.friendId?.hasError}
        {...getOverrideProps(overrides, "friendId")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              friendshipId,
              userId,
              friendId,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
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

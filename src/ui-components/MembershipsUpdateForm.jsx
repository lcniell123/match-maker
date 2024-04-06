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
import { getMemberships } from "../graphql/queries";
import { updateMemberships } from "../graphql/mutations";
const client = generateClient();
export default function MembershipsUpdateForm(props) {
  const {
    id: idProp,
    memberships: membershipsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    membershipID: "",
    groupId: "",
    userId: "",
  };
  const [membershipID, setMembershipID] = React.useState(
    initialValues.membershipID
  );
  const [groupId, setGroupId] = React.useState(initialValues.groupId);
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = membershipsRecord
      ? { ...initialValues, ...membershipsRecord }
      : initialValues;
    setMembershipID(cleanValues.membershipID);
    setGroupId(cleanValues.groupId);
    setUserId(cleanValues.userId);
    setErrors({});
  };
  const [membershipsRecord, setMembershipsRecord] =
    React.useState(membershipsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMemberships.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMemberships
        : membershipsModelProp;
      setMembershipsRecord(record);
    };
    queryData();
  }, [idProp, membershipsModelProp]);
  React.useEffect(resetStateValues, [membershipsRecord]);
  const validations = {
    membershipID: [],
    groupId: [],
    userId: [],
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
          membershipID: membershipID ?? null,
          groupId: groupId ?? null,
          userId: userId ?? null,
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
            query: updateMemberships.replaceAll("__typename", ""),
            variables: {
              input: {
                id: membershipsRecord.id,
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
      {...getOverrideProps(overrides, "MembershipsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Membership id"
        isRequired={false}
        isReadOnly={false}
        value={membershipID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              membershipID: value,
              groupId,
              userId,
            };
            const result = onChange(modelFields);
            value = result?.membershipID ?? value;
          }
          if (errors.membershipID?.hasError) {
            runValidationTasks("membershipID", value);
          }
          setMembershipID(value);
        }}
        onBlur={() => runValidationTasks("membershipID", membershipID)}
        errorMessage={errors.membershipID?.errorMessage}
        hasError={errors.membershipID?.hasError}
        {...getOverrideProps(overrides, "membershipID")}
      ></TextField>
      <TextField
        label="Group id"
        isRequired={false}
        isReadOnly={false}
        value={groupId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              membershipID,
              groupId: value,
              userId,
            };
            const result = onChange(modelFields);
            value = result?.groupId ?? value;
          }
          if (errors.groupId?.hasError) {
            runValidationTasks("groupId", value);
          }
          setGroupId(value);
        }}
        onBlur={() => runValidationTasks("groupId", groupId)}
        errorMessage={errors.groupId?.errorMessage}
        hasError={errors.groupId?.hasError}
        {...getOverrideProps(overrides, "groupId")}
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
              membershipID,
              groupId,
              userId: value,
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
          isDisabled={!(idProp || membershipsModelProp)}
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
              !(idProp || membershipsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

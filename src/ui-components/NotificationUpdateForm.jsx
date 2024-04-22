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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNotification } from "../graphql/queries";
import { updateNotification } from "../graphql/mutations";
const client = generateClient();
export default function NotificationUpdateForm(props) {
  const {
    id: idProp,
    notification: notificationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    content: "",
    read: false,
  };
  const [type, setType] = React.useState(initialValues.type);
  const [content, setContent] = React.useState(initialValues.content);
  const [read, setRead] = React.useState(initialValues.read);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = notificationRecord
      ? { ...initialValues, ...notificationRecord }
      : initialValues;
    setType(cleanValues.type);
    setContent(cleanValues.content);
    setRead(cleanValues.read);
    setErrors({});
  };
  const [notificationRecord, setNotificationRecord] = React.useState(
    notificationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNotification.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNotification
        : notificationModelProp;
      setNotificationRecord(record);
    };
    queryData();
  }, [idProp, notificationModelProp]);
  React.useEffect(resetStateValues, [notificationRecord]);
  const validations = {
    type: [],
    content: [{ type: "Required" }],
    read: [],
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
          type: type ?? null,
          content,
          read: read ?? null,
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
            query: updateNotification.replaceAll("__typename", ""),
            variables: {
              input: {
                id: notificationRecord.id,
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
      {...getOverrideProps(overrides, "NotificationUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              content,
              read,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Friend request"
          value="FRIEND_REQUEST"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Message"
          value="MESSAGE"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Group invitation"
          value="GROUP_INVITATION"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Group message"
          value="GROUP_MESSAGE"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              content: value,
              read,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <SwitchField
        label="Read"
        defaultChecked={false}
        isDisabled={false}
        isChecked={read}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              content,
              read: value,
            };
            const result = onChange(modelFields);
            value = result?.read ?? value;
          }
          if (errors.read?.hasError) {
            runValidationTasks("read", value);
          }
          setRead(value);
        }}
        onBlur={() => runValidationTasks("read", read)}
        errorMessage={errors.read?.errorMessage}
        hasError={errors.read?.hasError}
        {...getOverrideProps(overrides, "read")}
      ></SwitchField>
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
          isDisabled={!(idProp || notificationModelProp)}
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
              !(idProp || notificationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

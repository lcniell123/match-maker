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
import { createProfile } from "../graphql/mutations";
const client = generateClient();
export default function ProfileCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    age: "",
    languages: "",
    bio: "",
    country: "",
    zipCode: "",
    timeZone: "",
    gamePreference: "",
    behaviour: "",
    skillLevel: "",
    playStyle: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [age, setAge] = React.useState(initialValues.age);
  const [languages, setLanguages] = React.useState(initialValues.languages);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [country, setCountry] = React.useState(initialValues.country);
  const [zipCode, setZipCode] = React.useState(initialValues.zipCode);
  const [timeZone, setTimeZone] = React.useState(initialValues.timeZone);
  const [gamePreference, setGamePreference] = React.useState(
    initialValues.gamePreference
  );
  const [behaviour, setBehaviour] = React.useState(initialValues.behaviour);
  const [skillLevel, setSkillLevel] = React.useState(initialValues.skillLevel);
  const [playStyle, setPlayStyle] = React.useState(initialValues.playStyle);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setAge(initialValues.age);
    setLanguages(initialValues.languages);
    setBio(initialValues.bio);
    setCountry(initialValues.country);
    setZipCode(initialValues.zipCode);
    setTimeZone(initialValues.timeZone);
    setGamePreference(initialValues.gamePreference);
    setBehaviour(initialValues.behaviour);
    setSkillLevel(initialValues.skillLevel);
    setPlayStyle(initialValues.playStyle);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    age: [],
    languages: [],
    bio: [],
    country: [],
    zipCode: [],
    timeZone: [],
    gamePreference: [],
    behaviour: [],
    skillLevel: [],
    playStyle: [],
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
          name,
          description,
          age,
          languages,
          bio,
          country,
          zipCode,
          timeZone,
          gamePreference,
          behaviour,
          skillLevel,
          playStyle,
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
            query: createProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProfileCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              age,
              languages,
              bio,
              country,
              zipCode,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              age,
              languages,
              bio,
              country,
              zipCode,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              age: value,
              languages,
              bio,
              country,
              zipCode,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Languages"
        isRequired={false}
        isReadOnly={false}
        value={languages}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages: value,
              bio,
              country,
              zipCode,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.languages ?? value;
          }
          if (errors.languages?.hasError) {
            runValidationTasks("languages", value);
          }
          setLanguages(value);
        }}
        onBlur={() => runValidationTasks("languages", languages)}
        errorMessage={errors.languages?.errorMessage}
        hasError={errors.languages?.hasError}
        {...getOverrideProps(overrides, "languages")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages,
              bio: value,
              country,
              zipCode,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages,
              bio,
              country: value,
              zipCode,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Zip code"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={zipCode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages,
              bio,
              country,
              zipCode: value,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.zipCode ?? value;
          }
          if (errors.zipCode?.hasError) {
            runValidationTasks("zipCode", value);
          }
          setZipCode(value);
        }}
        onBlur={() => runValidationTasks("zipCode", zipCode)}
        errorMessage={errors.zipCode?.errorMessage}
        hasError={errors.zipCode?.hasError}
        {...getOverrideProps(overrides, "zipCode")}
      ></TextField>
      <TextField
        label="Time zone"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={timeZone}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages,
              bio,
              country,
              zipCode,
              timeZone: value,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.timeZone ?? value;
          }
          if (errors.timeZone?.hasError) {
            runValidationTasks("timeZone", value);
          }
          setTimeZone(value);
        }}
        onBlur={() => runValidationTasks("timeZone", timeZone)}
        errorMessage={errors.timeZone?.errorMessage}
        hasError={errors.timeZone?.hasError}
        {...getOverrideProps(overrides, "timeZone")}
      ></TextField>
      <TextField
        label="Game preference"
        isRequired={false}
        isReadOnly={false}
        value={gamePreference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages,
              bio,
              country,
              zipCode,
              timeZone,
              gamePreference: value,
              behaviour,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.gamePreference ?? value;
          }
          if (errors.gamePreference?.hasError) {
            runValidationTasks("gamePreference", value);
          }
          setGamePreference(value);
        }}
        onBlur={() => runValidationTasks("gamePreference", gamePreference)}
        errorMessage={errors.gamePreference?.errorMessage}
        hasError={errors.gamePreference?.hasError}
        {...getOverrideProps(overrides, "gamePreference")}
      ></TextField>
      <TextField
        label="Behaviour"
        isRequired={false}
        isReadOnly={false}
        value={behaviour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages,
              bio,
              country,
              zipCode,
              timeZone,
              gamePreference,
              behaviour: value,
              skillLevel,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.behaviour ?? value;
          }
          if (errors.behaviour?.hasError) {
            runValidationTasks("behaviour", value);
          }
          setBehaviour(value);
        }}
        onBlur={() => runValidationTasks("behaviour", behaviour)}
        errorMessage={errors.behaviour?.errorMessage}
        hasError={errors.behaviour?.hasError}
        {...getOverrideProps(overrides, "behaviour")}
      ></TextField>
      <TextField
        label="Skill level"
        isRequired={false}
        isReadOnly={false}
        value={skillLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages,
              bio,
              country,
              zipCode,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel: value,
              playStyle,
            };
            const result = onChange(modelFields);
            value = result?.skillLevel ?? value;
          }
          if (errors.skillLevel?.hasError) {
            runValidationTasks("skillLevel", value);
          }
          setSkillLevel(value);
        }}
        onBlur={() => runValidationTasks("skillLevel", skillLevel)}
        errorMessage={errors.skillLevel?.errorMessage}
        hasError={errors.skillLevel?.hasError}
        {...getOverrideProps(overrides, "skillLevel")}
      ></TextField>
      <TextField
        label="Play style"
        isRequired={false}
        isReadOnly={false}
        value={playStyle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              age,
              languages,
              bio,
              country,
              zipCode,
              timeZone,
              gamePreference,
              behaviour,
              skillLevel,
              playStyle: value,
            };
            const result = onChange(modelFields);
            value = result?.playStyle ?? value;
          }
          if (errors.playStyle?.hasError) {
            runValidationTasks("playStyle", value);
          }
          setPlayStyle(value);
        }}
        onBlur={() => runValidationTasks("playStyle", playStyle)}
        errorMessage={errors.playStyle?.errorMessage}
        hasError={errors.playStyle?.hasError}
        {...getOverrideProps(overrides, "playStyle")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

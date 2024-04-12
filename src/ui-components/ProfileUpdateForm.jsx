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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getProfile } from "../graphql/queries";
import { updateProfile } from "../graphql/mutations";
const client = generateClient();
export default function ProfileUpdateForm(props) {
  const {
    id: idProp,
    profile: profileModelProp,
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
    languages: "",
    zipCode: "",
    gamePreference: "",
    behaviour: "",
    username: "",
    bio: "",
    photo: "",
    coverPhoto: "",
    firstName: "",
    lastName: "",
    age: "",
    country: "",
    timeZone: "",
    city: "",
    region: "",
    postalCode: "",
    language: "",
    favoriteGame: "",
    preferredGenre: "",
    timeAvailability: "",
    preferredTeammateAgeRange: "",
    skillLevel: "",
    preferredGameMode: "",
    preferredRole: "",
    playStyle: "",
    flexibility: false,
    behavior: "",
    communicationPreference: "",
    toleranceLevel: "",
    teamworkLevel: "",
    competitivenessLevel: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [languages, setLanguages] = React.useState(initialValues.languages);
  const [zipCode, setZipCode] = React.useState(initialValues.zipCode);
  const [gamePreference, setGamePreference] = React.useState(
    initialValues.gamePreference
  );
  const [behaviour, setBehaviour] = React.useState(initialValues.behaviour);
  const [username, setUsername] = React.useState(initialValues.username);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [photo, setPhoto] = React.useState(initialValues.photo);
  const [coverPhoto, setCoverPhoto] = React.useState(initialValues.coverPhoto);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [age, setAge] = React.useState(initialValues.age);
  const [country, setCountry] = React.useState(initialValues.country);
  const [timeZone, setTimeZone] = React.useState(initialValues.timeZone);
  const [city, setCity] = React.useState(initialValues.city);
  const [region, setRegion] = React.useState(initialValues.region);
  const [postalCode, setPostalCode] = React.useState(initialValues.postalCode);
  const [language, setLanguage] = React.useState(initialValues.language);
  const [favoriteGame, setFavoriteGame] = React.useState(
    initialValues.favoriteGame
  );
  const [preferredGenre, setPreferredGenre] = React.useState(
    initialValues.preferredGenre
  );
  const [timeAvailability, setTimeAvailability] = React.useState(
    initialValues.timeAvailability
  );
  const [preferredTeammateAgeRange, setPreferredTeammateAgeRange] =
    React.useState(initialValues.preferredTeammateAgeRange);
  const [skillLevel, setSkillLevel] = React.useState(initialValues.skillLevel);
  const [preferredGameMode, setPreferredGameMode] = React.useState(
    initialValues.preferredGameMode
  );
  const [preferredRole, setPreferredRole] = React.useState(
    initialValues.preferredRole
  );
  const [playStyle, setPlayStyle] = React.useState(initialValues.playStyle);
  const [flexibility, setFlexibility] = React.useState(
    initialValues.flexibility
  );
  const [behavior, setBehavior] = React.useState(initialValues.behavior);
  const [communicationPreference, setCommunicationPreference] = React.useState(
    initialValues.communicationPreference
  );
  const [toleranceLevel, setToleranceLevel] = React.useState(
    initialValues.toleranceLevel
  );
  const [teamworkLevel, setTeamworkLevel] = React.useState(
    initialValues.teamworkLevel
  );
  const [competitivenessLevel, setCompetitivenessLevel] = React.useState(
    initialValues.competitivenessLevel
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = profileRecord
      ? { ...initialValues, ...profileRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setLanguages(cleanValues.languages);
    setZipCode(cleanValues.zipCode);
    setGamePreference(cleanValues.gamePreference);
    setBehaviour(cleanValues.behaviour);
    setUsername(cleanValues.username);
    setBio(cleanValues.bio);
    setPhoto(cleanValues.photo);
    setCoverPhoto(cleanValues.coverPhoto);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setAge(cleanValues.age);
    setCountry(cleanValues.country);
    setTimeZone(cleanValues.timeZone);
    setCity(cleanValues.city);
    setRegion(cleanValues.region);
    setPostalCode(cleanValues.postalCode);
    setLanguage(cleanValues.language);
    setFavoriteGame(cleanValues.favoriteGame);
    setPreferredGenre(cleanValues.preferredGenre);
    setTimeAvailability(cleanValues.timeAvailability);
    setPreferredTeammateAgeRange(cleanValues.preferredTeammateAgeRange);
    setSkillLevel(cleanValues.skillLevel);
    setPreferredGameMode(cleanValues.preferredGameMode);
    setPreferredRole(cleanValues.preferredRole);
    setPlayStyle(cleanValues.playStyle);
    setFlexibility(cleanValues.flexibility);
    setBehavior(cleanValues.behavior);
    setCommunicationPreference(cleanValues.communicationPreference);
    setToleranceLevel(cleanValues.toleranceLevel);
    setTeamworkLevel(cleanValues.teamworkLevel);
    setCompetitivenessLevel(cleanValues.competitivenessLevel);
    setErrors({});
  };
  const [profileRecord, setProfileRecord] = React.useState(profileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProfile
        : profileModelProp;
      setProfileRecord(record);
    };
    queryData();
  }, [idProp, profileModelProp]);
  React.useEffect(resetStateValues, [profileRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    languages: [],
    zipCode: [],
    gamePreference: [],
    behaviour: [],
    username: [],
    bio: [],
    photo: [],
    coverPhoto: [],
    firstName: [],
    lastName: [],
    age: [],
    country: [],
    timeZone: [],
    city: [],
    region: [],
    postalCode: [],
    language: [],
    favoriteGame: [],
    preferredGenre: [],
    timeAvailability: [],
    preferredTeammateAgeRange: [],
    skillLevel: [],
    preferredGameMode: [],
    preferredRole: [],
    playStyle: [],
    flexibility: [],
    behavior: [],
    communicationPreference: [],
    toleranceLevel: [],
    teamworkLevel: [],
    competitivenessLevel: [],
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
          description: description ?? null,
          languages: languages ?? null,
          zipCode: zipCode ?? null,
          gamePreference: gamePreference ?? null,
          behaviour: behaviour ?? null,
          username: username ?? null,
          bio: bio ?? null,
          photo: photo ?? null,
          coverPhoto: coverPhoto ?? null,
          firstName: firstName ?? null,
          lastName: lastName ?? null,
          age: age ?? null,
          country: country ?? null,
          timeZone: timeZone ?? null,
          city: city ?? null,
          region: region ?? null,
          postalCode: postalCode ?? null,
          language: language ?? null,
          favoriteGame: favoriteGame ?? null,
          preferredGenre: preferredGenre ?? null,
          timeAvailability: timeAvailability ?? null,
          preferredTeammateAgeRange: preferredTeammateAgeRange ?? null,
          skillLevel: skillLevel ?? null,
          preferredGameMode: preferredGameMode ?? null,
          preferredRole: preferredRole ?? null,
          playStyle: playStyle ?? null,
          flexibility: flexibility ?? null,
          behavior: behavior ?? null,
          communicationPreference: communicationPreference ?? null,
          toleranceLevel: toleranceLevel ?? null,
          teamworkLevel: teamworkLevel ?? null,
          competitivenessLevel: competitivenessLevel ?? null,
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
            query: updateProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                id: profileRecord.id,
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
      {...getOverrideProps(overrides, "ProfileUpdateForm")}
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
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
              languages: value,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
        label="Zip code"
        isRequired={false}
        isReadOnly={false}
        value={zipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode: value,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
              languages,
              zipCode,
              gamePreference: value,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
              languages,
              zipCode,
              gamePreference,
              behaviour: value,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username: value,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
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
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio: value,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
        label="Photo"
        isRequired={false}
        isReadOnly={false}
        value={photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo: value,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.photo ?? value;
          }
          if (errors.photo?.hasError) {
            runValidationTasks("photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("photo", photo)}
        errorMessage={errors.photo?.errorMessage}
        hasError={errors.photo?.hasError}
        {...getOverrideProps(overrides, "photo")}
      ></TextField>
      <TextField
        label="Cover photo"
        isRequired={false}
        isReadOnly={false}
        value={coverPhoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto: value,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.coverPhoto ?? value;
          }
          if (errors.coverPhoto?.hasError) {
            runValidationTasks("coverPhoto", value);
          }
          setCoverPhoto(value);
        }}
        onBlur={() => runValidationTasks("coverPhoto", coverPhoto)}
        errorMessage={errors.coverPhoto?.errorMessage}
        hasError={errors.coverPhoto?.hasError}
        {...getOverrideProps(overrides, "coverPhoto")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName: value,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName: value,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
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
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age: value,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country: value,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
        label="Time zone"
        isRequired={false}
        isReadOnly={false}
        value={timeZone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone: value,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city: value,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Region"
        isRequired={false}
        isReadOnly={false}
        value={region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region: value,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.region ?? value;
          }
          if (errors.region?.hasError) {
            runValidationTasks("region", value);
          }
          setRegion(value);
        }}
        onBlur={() => runValidationTasks("region", region)}
        errorMessage={errors.region?.errorMessage}
        hasError={errors.region?.hasError}
        {...getOverrideProps(overrides, "region")}
      ></TextField>
      <TextField
        label="Postal code"
        isRequired={false}
        isReadOnly={false}
        value={postalCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode: value,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.postalCode ?? value;
          }
          if (errors.postalCode?.hasError) {
            runValidationTasks("postalCode", value);
          }
          setPostalCode(value);
        }}
        onBlur={() => runValidationTasks("postalCode", postalCode)}
        errorMessage={errors.postalCode?.errorMessage}
        hasError={errors.postalCode?.hasError}
        {...getOverrideProps(overrides, "postalCode")}
      ></TextField>
      <TextField
        label="Language"
        isRequired={false}
        isReadOnly={false}
        value={language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language: value,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.language ?? value;
          }
          if (errors.language?.hasError) {
            runValidationTasks("language", value);
          }
          setLanguage(value);
        }}
        onBlur={() => runValidationTasks("language", language)}
        errorMessage={errors.language?.errorMessage}
        hasError={errors.language?.hasError}
        {...getOverrideProps(overrides, "language")}
      ></TextField>
      <TextField
        label="Favorite game"
        isRequired={false}
        isReadOnly={false}
        value={favoriteGame}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame: value,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.favoriteGame ?? value;
          }
          if (errors.favoriteGame?.hasError) {
            runValidationTasks("favoriteGame", value);
          }
          setFavoriteGame(value);
        }}
        onBlur={() => runValidationTasks("favoriteGame", favoriteGame)}
        errorMessage={errors.favoriteGame?.errorMessage}
        hasError={errors.favoriteGame?.hasError}
        {...getOverrideProps(overrides, "favoriteGame")}
      ></TextField>
      <TextField
        label="Preferred genre"
        isRequired={false}
        isReadOnly={false}
        value={preferredGenre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre: value,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.preferredGenre ?? value;
          }
          if (errors.preferredGenre?.hasError) {
            runValidationTasks("preferredGenre", value);
          }
          setPreferredGenre(value);
        }}
        onBlur={() => runValidationTasks("preferredGenre", preferredGenre)}
        errorMessage={errors.preferredGenre?.errorMessage}
        hasError={errors.preferredGenre?.hasError}
        {...getOverrideProps(overrides, "preferredGenre")}
      ></TextField>
      <TextField
        label="Time availability"
        isRequired={false}
        isReadOnly={false}
        value={timeAvailability}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability: value,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.timeAvailability ?? value;
          }
          if (errors.timeAvailability?.hasError) {
            runValidationTasks("timeAvailability", value);
          }
          setTimeAvailability(value);
        }}
        onBlur={() => runValidationTasks("timeAvailability", timeAvailability)}
        errorMessage={errors.timeAvailability?.errorMessage}
        hasError={errors.timeAvailability?.hasError}
        {...getOverrideProps(overrides, "timeAvailability")}
      ></TextField>
      <TextField
        label="Preferred teammate age range"
        isRequired={false}
        isReadOnly={false}
        value={preferredTeammateAgeRange}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange: value,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.preferredTeammateAgeRange ?? value;
          }
          if (errors.preferredTeammateAgeRange?.hasError) {
            runValidationTasks("preferredTeammateAgeRange", value);
          }
          setPreferredTeammateAgeRange(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "preferredTeammateAgeRange",
            preferredTeammateAgeRange
          )
        }
        errorMessage={errors.preferredTeammateAgeRange?.errorMessage}
        hasError={errors.preferredTeammateAgeRange?.hasError}
        {...getOverrideProps(overrides, "preferredTeammateAgeRange")}
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
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel: value,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
        label="Preferred game mode"
        isRequired={false}
        isReadOnly={false}
        value={preferredGameMode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode: value,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.preferredGameMode ?? value;
          }
          if (errors.preferredGameMode?.hasError) {
            runValidationTasks("preferredGameMode", value);
          }
          setPreferredGameMode(value);
        }}
        onBlur={() =>
          runValidationTasks("preferredGameMode", preferredGameMode)
        }
        errorMessage={errors.preferredGameMode?.errorMessage}
        hasError={errors.preferredGameMode?.hasError}
        {...getOverrideProps(overrides, "preferredGameMode")}
      ></TextField>
      <TextField
        label="Preferred role"
        isRequired={false}
        isReadOnly={false}
        value={preferredRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole: value,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.preferredRole ?? value;
          }
          if (errors.preferredRole?.hasError) {
            runValidationTasks("preferredRole", value);
          }
          setPreferredRole(value);
        }}
        onBlur={() => runValidationTasks("preferredRole", preferredRole)}
        errorMessage={errors.preferredRole?.errorMessage}
        hasError={errors.preferredRole?.hasError}
        {...getOverrideProps(overrides, "preferredRole")}
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
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle: value,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
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
      <SwitchField
        label="Flexibility"
        defaultChecked={false}
        isDisabled={false}
        isChecked={flexibility}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility: value,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.flexibility ?? value;
          }
          if (errors.flexibility?.hasError) {
            runValidationTasks("flexibility", value);
          }
          setFlexibility(value);
        }}
        onBlur={() => runValidationTasks("flexibility", flexibility)}
        errorMessage={errors.flexibility?.errorMessage}
        hasError={errors.flexibility?.hasError}
        {...getOverrideProps(overrides, "flexibility")}
      ></SwitchField>
      <TextField
        label="Behavior"
        isRequired={false}
        isReadOnly={false}
        value={behavior}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior: value,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.behavior ?? value;
          }
          if (errors.behavior?.hasError) {
            runValidationTasks("behavior", value);
          }
          setBehavior(value);
        }}
        onBlur={() => runValidationTasks("behavior", behavior)}
        errorMessage={errors.behavior?.errorMessage}
        hasError={errors.behavior?.hasError}
        {...getOverrideProps(overrides, "behavior")}
      ></TextField>
      <TextField
        label="Communication preference"
        isRequired={false}
        isReadOnly={false}
        value={communicationPreference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference: value,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.communicationPreference ?? value;
          }
          if (errors.communicationPreference?.hasError) {
            runValidationTasks("communicationPreference", value);
          }
          setCommunicationPreference(value);
        }}
        onBlur={() =>
          runValidationTasks("communicationPreference", communicationPreference)
        }
        errorMessage={errors.communicationPreference?.errorMessage}
        hasError={errors.communicationPreference?.hasError}
        {...getOverrideProps(overrides, "communicationPreference")}
      ></TextField>
      <TextField
        label="Tolerance level"
        isRequired={false}
        isReadOnly={false}
        value={toleranceLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel: value,
              teamworkLevel,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.toleranceLevel ?? value;
          }
          if (errors.toleranceLevel?.hasError) {
            runValidationTasks("toleranceLevel", value);
          }
          setToleranceLevel(value);
        }}
        onBlur={() => runValidationTasks("toleranceLevel", toleranceLevel)}
        errorMessage={errors.toleranceLevel?.errorMessage}
        hasError={errors.toleranceLevel?.hasError}
        {...getOverrideProps(overrides, "toleranceLevel")}
      ></TextField>
      <TextField
        label="Teamwork level"
        isRequired={false}
        isReadOnly={false}
        value={teamworkLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel: value,
              competitivenessLevel,
            };
            const result = onChange(modelFields);
            value = result?.teamworkLevel ?? value;
          }
          if (errors.teamworkLevel?.hasError) {
            runValidationTasks("teamworkLevel", value);
          }
          setTeamworkLevel(value);
        }}
        onBlur={() => runValidationTasks("teamworkLevel", teamworkLevel)}
        errorMessage={errors.teamworkLevel?.errorMessage}
        hasError={errors.teamworkLevel?.hasError}
        {...getOverrideProps(overrides, "teamworkLevel")}
      ></TextField>
      <TextField
        label="Competitiveness level"
        isRequired={false}
        isReadOnly={false}
        value={competitivenessLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              languages,
              zipCode,
              gamePreference,
              behaviour,
              username,
              bio,
              photo,
              coverPhoto,
              firstName,
              lastName,
              age,
              country,
              timeZone,
              city,
              region,
              postalCode,
              language,
              favoriteGame,
              preferredGenre,
              timeAvailability,
              preferredTeammateAgeRange,
              skillLevel,
              preferredGameMode,
              preferredRole,
              playStyle,
              flexibility,
              behavior,
              communicationPreference,
              toleranceLevel,
              teamworkLevel,
              competitivenessLevel: value,
            };
            const result = onChange(modelFields);
            value = result?.competitivenessLevel ?? value;
          }
          if (errors.competitivenessLevel?.hasError) {
            runValidationTasks("competitivenessLevel", value);
          }
          setCompetitivenessLevel(value);
        }}
        onBlur={() =>
          runValidationTasks("competitivenessLevel", competitivenessLevel)
        }
        errorMessage={errors.competitivenessLevel?.errorMessage}
        hasError={errors.competitivenessLevel?.hasError}
        {...getOverrideProps(overrides, "competitivenessLevel")}
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
          isDisabled={!(idProp || profileModelProp)}
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
              !(idProp || profileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

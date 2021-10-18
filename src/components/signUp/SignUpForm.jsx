import { Formik } from "formik";
import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import * as yup from 'yup';
import FormikTextInput from "../../utils/FormikUtil/FormikTextInput";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  reviewForm: theme.formView,
  formItems: theme.formItems,
  formError: theme.formError,
  pressable: theme.formPressable,
  pressableText: {
    color: theme.itemContainer.backgroundColor,
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1)
    .max(30, 'Username must be between 1-30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be between 5-50 characters')
    .max(50, 'Password must be between 5-50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is required')
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
    {({handleSubmit, errors}) => 
      <View style={styles.reviewForm}>
        <FormikTextInput name='username' placeholder='Username' style={errors.username ? styles.formError : styles.formItems}/>
        <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} style={errors.password ? styles.formError : styles.formItems}/>
        <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation' secureTextEntry={true} style={errors.passwordConfirmation ? styles.formError : styles.formItems}/>
        <Pressable onPress={handleSubmit} style={styles.pressable}>
            <Text style={styles.pressableText} fontWeight='bold'>Sign up</Text>
          </Pressable>
      </View>
    }

    </Formik>
  );
};

export default SignUpForm;
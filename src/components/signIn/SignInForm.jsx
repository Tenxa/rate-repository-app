import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../../theme';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikUtil/FormikTextInput';


const styles = StyleSheet.create({
  signInForm: {
    padding: 10,
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.backGroundColors.repositoryItem,
  },
  FormItems: {
    margin: 5,
    padding: 10,
    borderColor: theme.backGroundColors.main,
    borderRadius: 3,
    borderWidth: 1
  },
  formError: {
    margin: 5,
    padding: 10,
    borderColor: '#d73a4a',
    borderRadius: 3,
    borderWidth: 1
  },
  pressable: {
    margin: 5,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backGroundColors.languageText,
    borderColor: theme.backGroundColors.languageText,
    borderRadius: 3,
    borderWidth: 1
  },
  pressableText: {
    color: theme.backGroundColors.repositoryItem,
  }
});


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const initialValues = {
  username: '',
  password: ''
};



const SignInForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
      {({handleSubmit, errors}) =>
      <View style={styles.signInForm}>
        <FormikTextInput name="username" placeholder="Username" style={errors.username ? styles.formError : styles.FormItems}/>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={errors.password ? styles.formError : styles.FormItems}/>
        <Pressable onPress={handleSubmit} style={styles.pressable}>
          <Text style={styles.pressableText}>Sign in</Text>
        </Pressable>
      </View>
      }

    </Formik>
  );
};

export default SignInForm;
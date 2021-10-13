import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../../theme';
import { Pressable, View, StyleSheet } from 'react-native';
import Text from '../Text';
import FormikTextInput from '../../utils/FormikUtil/FormikTextInput';


const styles = StyleSheet.create({
  signInForm: theme.formView,
  FormItems: theme.formItems,
  formError: theme.formError,
  pressable: theme.formPressable,
  pressableText: {
    color: theme.itemContainer.backgroundColor,
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
        <FormikTextInput testID='usernameField' name="username" placeholder="Username" style={errors.username ? styles.formError : styles.FormItems}/>
        <FormikTextInput testID='passwordField' name="password" placeholder="Password" secureTextEntry={true} style={errors.password ? styles.formError : styles.FormItems}/>
        <Pressable testID='submitButton' onPress={handleSubmit} style={styles.pressable}>
          <Text style={styles.pressableText} fontWeight='bold'>Sign in</Text>
        </Pressable>
      </View>
      }

    </Formik>
  );
};

export default SignInForm;
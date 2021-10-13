import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../../theme';
import { Pressable, View, StyleSheet } from 'react-native';
import Text from '../Text';
import FormikTextInput from '../../utils/FormikUtil/FormikTextInput';

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
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be 0-100')
    .max(100, 'Rating must be 0-100')
    .required('Rating is required'),
  text: yup
    .string()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) =>
        <View style={styles.reviewForm}>
          <FormikTextInput name='ownerName' placeholder='Repository owner name' style={errors.ownerName ? styles.formError : styles.formItems}/>
          <FormikTextInput name='repositoryName' placeholder='Repository name'style={errors.repositoryName ? styles.formError : styles.formItems}/>
          <FormikTextInput name='rating' placeholder='Rating between 0 and 100' style={errors.rating ? styles.formError : styles.formItems}/>
          <FormikTextInput name='text' placeholder='Review' multiline={true} style={errors.text ? styles.formError : styles.formItems}/>
          <Pressable onPress={handleSubmit} style={styles.pressable}>
            <Text style={styles.pressableText} fontWeight='bold'>Create a review</Text>
          </Pressable>
        </View>
      }

    </Formik>
  );
};

export default ReviewForm;
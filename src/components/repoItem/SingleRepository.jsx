import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);


  return (
    <View>
      <RepositoryItem {...repository} clicked={true}/>
    </View>
  );
};

export default SingleRepository;
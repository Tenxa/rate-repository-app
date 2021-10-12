import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import theme from '../../theme';
import RepositoryNumber from './RepositoryNumber';
import RepoDetails from './RepoDetails';
import * as Linking from 'expo-linking';


const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    backgroundColor: theme.backGroundColors.repositoryItem,
    padding: 10,
    width: '100%',
  },
  flexTop: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    flexGrow: 1
  },
  flexTopLeft: {
    display: 'flex',
    paddingBottom: 25,
  },
  flexTopRight: {
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'flex-start',
  },
  topRightItems: {
    padding: 2.5,
  },
  flexBottom: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  bottomBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.blueBtn.backgroundColor,
    borderRadius: theme.blueBtn.borderRadius,
  },
  buttonTxt: {
    color: 'white',
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold
  }
});


const RepositoryItem = ({ fullName, description, language,
stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl, url, clicked }) => {


  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexTop}>
        <View style={styles.flexTopLeft}>
          <Image
            testID={'image'}
            style={styles.tinyLogo}
            source={{
              uri: ownerAvatarUrl,
            }} />
        </View>

        <RepoDetails styleContainer={styles.flexTopRight} styleItem={styles.topRightItems}
          fullName={fullName} description={description} language={language} />
      </View>

      <View style={styles.flexBottom}>
        <RepositoryNumber testID={`starsField`} number={stargazersCount} text='Stars' />
        <RepositoryNumber testID={`forksField`} number={forksCount} text='Forks' />
        <RepositoryNumber testID={`reviewsField`} number={reviewCount} text='Reviews' />
        <RepositoryNumber testID={`ratingField`} number={ratingAverage} text='Rating' />
      </View>

      {clicked ?
        <View style={styles.bottomBtn}>
          <Pressable onPress={() => Linking.openURL(url)}>
            <Text style={styles.buttonTxt}>
              Open in GitHub
            </Text>
          </Pressable>
        </View>
        : null}

    </View>
  );
};

export default RepositoryItem;
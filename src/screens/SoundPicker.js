import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, BackHandler, Dimensions, StyleSheet, YellowBox } from 'react-native'
import { withNavigation } from 'react-navigation'
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel'

import { useBackHandler } from '../utils/'
import SoundList from '../components/SoundList'
import { SOUND_FILES, CATEGORY_IMAGES } from '../constants'
import { OuterContainer } from '../components/Modal/styles'
import { SoundCategoryContainer, SoundCategoryText, SoundCategoryImageContainer, Filler } from './styles/soundPicker'


/**
 * TODO:
 * fix tappableDots on carousel's pagination not showing up before scrolling
 */

const SoundPicker = ({ navigation }) => {
  useBackHandler(BackHandler, navigation, () => navigation.goBack());

  const [currentIndex, setCurrentIndex] = useState(0)

  const CATEGORIES = useRef([]);
  const carouselRef = useRef()

  const CAROUSEL_CARD_WIDTH = Dimensions.get('screen').width - 100;
  const CAROUSEL_IMAGE_HEIGHT = Dimensions.get('screen').height / 4;

  const _initData = () => { Object.keys(SOUND_FILES).map(category => CATEGORIES.current.push(category)) }

  useEffect(() => {
    YellowBox.ignoreWarnings(['react-native-snap-carousel | Pagination: You must specify prop `carouselRef` when setting `tappableDots` to `true`'])
    _initData();
  }, [])


  const renderCarouselCard = ({ item }, parallaxProps) => (
    <SoundCategoryContainer width={CAROUSEL_CARD_WIDTH}>
      <Filler />
      <SoundCategoryImageContainer height={CAROUSEL_IMAGE_HEIGHT}>
        <SoundCategoryText >{item}</SoundCategoryText>
        <ParallaxImage
          source={CATEGORY_IMAGES[item]}
          containerStyle={{
            position: 'relative',
            flex: 1,
            borderRadius: 6,
            marginBottom: 0.1,
            backgroundColor: 'white',
          }}
          style={{ ...StyleSheet.absoluteFillObject, resizeMode: 'cover' }}
          parallaxFactor={0.5}
          {...parallaxProps}
        />
      </SoundCategoryImageContainer>
      <Filler />
      <SoundList category={item} channelId={navigation.getParam('channelId')} key={item} />
    </SoundCategoryContainer>)

  return (
    <OuterContainer>
      <Carousel
        ref={carouselRef}
        shouldOptimizeUpdates
        data={CATEGORIES.current}
        renderItem={renderCarouselCard}
        onSnapToItem={index => setCurrentIndex(index)}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={CAROUSEL_CARD_WIDTH}
        hasParallaxImages={true}
        firstItem={2}
      />
      <Pagination
        carouselRef={carouselRef.current}
        dotsLength={CATEGORIES.current.length}
        activeDotIndex={currentIndex}
        containerStyle={{ position: 'absolute', bottom: -2 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots
      />
    </OuterContainer>
  )
}

SoundPicker.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(SoundPicker)

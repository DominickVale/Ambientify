import React, { useState, useEffect, useRef } from 'react'
import { BackHandler, Dimensions, StyleSheet, YellowBox } from 'react-native'
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel'
import { withNavigation } from 'react-navigation'
import { useTranslation } from 'react-i18next';

import { useBackHandler } from '../utils/'
import SoundList from '../components/SoundList'
import { OuterContainer } from '../components/ModalLayout/styles'
import { SOUND_FILES, CATEGORY_IMAGES, COLORS } from '../constants'
import { SoundCategoryContainer, SoundCategoryText, SoundCategoryImageContainer, Filler } from './styles/soundPicker'


const SoundPicker = ({ navigation }) => {
  useBackHandler(BackHandler, navigation, () => navigation.goBack());
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0)

  const CATEGORIES = useRef([]);
  const carouselRef = useRef()

  const CAROUSEL_CARD_WIDTH = Dimensions.get('screen').width - 90;
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
        <SoundCategoryText >{t(item)}</SoundCategoryText>
        <ParallaxImage
          source={CATEGORY_IMAGES[item]}
          showSpinner={false}
          fadeDuration={100}
          containerStyle={{
            position: 'relative',
            flex: 1,
            borderRadius: 6,
            marginBottom: 0.1,
            backgroundColor: COLORS.carouselCardImageBG,
            opacity: 0.7,
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
        activeSlideOffset={1}
        enableMomentum
        swipeThreshold={10}
        activeAnimationType='decay'
        hasParallaxImages={true}
        firstItem={2}
      />
      <Pagination
        carouselRef={carouselRef.current}
        dotsLength={CATEGORIES.current.length}
        activeDotIndex={currentIndex}
        containerStyle={{ position: 'absolute', bottom: -2 }}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 20,
          marginHorizontal: -4,
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

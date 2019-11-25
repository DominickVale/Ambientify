import React from "react";
import { LayoutChangeEvent, PanResponder, PanResponderGestureState } from "react-native";
import styled from "styled-components";
import { isEqual } from 'lodash'

import { COLORS } from '../../constants'

const initialValue = 100;
const min = 0;
const max = 100;
const CIRCLE_DIAMETER = 18;

export default class Slider extends React.Component {

  state = {
    barHeight: null,
    deltaValue: 0,
    value: initialValue
  };

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_, gestureState) => this.onMove(gestureState),
    onPanResponderRelease: () => this.onEndMove(),
    onPanResponderTerminate: () => { }
  });

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    const { value, deltaValue, barHeight } = this.state;

    const currentCappedValue = this.capValueWithinRange(value + deltaValue, [min, max]);
    const nextCappedValue = this.capValueWithinRange(nextState.value + nextState.deltaValue, [min, max]);

    if (!isEqual(currentCappedValue, nextCappedValue)) {
      this.props.onChange(parseFloat((nextCappedValue / 100).toFixed(2)))
    }
  }

  onMove(gestureState) {
    const { barHeight, value } = this.state;
    const newDeltaValue = this.getValueFromBottomOffset(-gestureState.dy, barHeight, min, max);

    this.setState({
      deltaValue: newDeltaValue
    });
  }
  onEndMove() {
    const { value, deltaValue } = this.state;
    this.setState({ value: value + deltaValue, deltaValue: 0 });
  }

  onBarLayout = (event) => {
    const { height: barHeight } = event.nativeEvent.layout;
    this.setState({ barHeight });
  };

  capValueWithinRange = (value, range) => {
    if (value < range[0]) return range[0];
    if (value > range[1]) return range[1];
    return value;
  };

  getValueFromBottomOffset = (offset, barHeight, rangeMin, rangeMax) => {
    if (barHeight === null) return 0;
    return ((rangeMax - rangeMin) * offset) / barHeight;
  };

  getBottomOffsetFromValue = (value, rangeMin, rangeMax, barHeight) => {
    if (barHeight === null) return 0;
    const valueOffset = value - rangeMin;
    const totalRange = rangeMax - rangeMin;
    const percentage = valueOffset / totalRange;
    return barHeight * percentage;
  };

  render() {
    const { value, deltaValue, barHeight } = this.state;

    const cappedValue = this.capValueWithinRange(value + deltaValue, [
      min,
      max
    ]);

    const bottomOffset = this.getBottomOffsetFromValue(
      cappedValue,
      min,
      max,
      barHeight
    );

    return (
      <PageContainer>
        <Container>
          <BarContainer>
            <Bar onLayout={this.onBarLayout} />
            <Circle
              bottomOffset={bottomOffset}
              {...this.panResponder.panHandlers}
            />
          </BarContainer>
        </Container>
      </PageContainer>
    );
  }
}

const PageContainer = styled.View`
  align-self: stretch;
  align-items: center;
  padding-vertical: 20;
`;

const Container = styled.View`
  height: 90px;
  align-self: stretch;
  justify-content: center;
  flex-direction: row;
`;

const BarContainer = styled.View`
  width: ${CIRCLE_DIAMETER};
  align-items: center;
  padding-vertical: ${CIRCLE_DIAMETER / 2};
  margin-horizontal: 20;
`;
const Bar = styled.View`
  width: 1;
  background-color: ${COLORS.sliderBar};
  flex-grow: 1;
`;

const Circle = styled.View`
  border-radius: ${CIRCLE_DIAMETER / 2};
  width: ${CIRCLE_DIAMETER};
  height: ${CIRCLE_DIAMETER};
  background-color: ${COLORS.sliderTop};
  position: absolute;
  bottom: ${props => props.bottomOffset};
`;
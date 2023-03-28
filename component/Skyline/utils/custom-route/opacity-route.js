import { Curves } from './common';

const OpacityTransitionRouteBuilder = ({ primaryAnimation }) => {
  const handlePrimaryAnimation = () => {
    'worklet';
    return {
      opacity: Curves.fastOutSlowIn(primaryAnimation.value),
    };
  };

  return {
    handlePrimaryAnimation,
    transitionDuration: 400,
    reverseTransitionDuration: 400,
    canTransitionTo: true,
    canTransitionFrom: false,
  };
};

export default OpacityTransitionRouteBuilder;

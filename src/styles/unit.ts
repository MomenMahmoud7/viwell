import {Dimensions} from 'react-native';
import {DESIGN_WIDTH} from '../utils/constants';

const screenWidth = Dimensions.get('screen').width;

const percentage = screenWidth / DESIGN_WIDTH;

export default percentage > 1.5 ? 1.5 : percentage;

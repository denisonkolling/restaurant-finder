import Lottie from "lottie-react";
import animatioData from '../../assets/restaurants-loading.json'

import React from 'react'

const Loader = () => <Lottie animationData={animatioData} loop={true} />;

export default Loader


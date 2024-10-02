import React from 'react'
import firstImg from '../../../utils/images/first.avif';
import secondImg from '../../../utils/images/second.avif'
import thirdImg from '../../../utils/images/third.avif'
import fourthImg from '../../../utils/images/fourth.avif'
import CardSlider from '../../../component/cardSlider';

const LearningComp = () => {
  const images = [
    { title: "first", poster: firstImg },
    { title: "second", poster: secondImg },
    { title: "third", poster: thirdImg },
    { title: "fourth", poster: fourthImg }
  ]
  return (
    <CardSlider title="Learning" images={images} />
  )
}

export default LearningComp

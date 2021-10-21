import { useTransform } from 'framer-motion'
import React, { useCallback, useLayoutEffect, useState } from 'react'

import { CarModel } from '../ModelsContext'
import useWrapperScroll from '../useWrapperScroll'

import { Container } from './styles'

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' |  'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({model, children}) => {
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions
  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { scrollY } = useWrapperScroll()

  const sectionScrollProgress = useTransform(
    scrollY,
     y => (y - dimensions.offsetTop) / dimensions.offsetHeight
    )

    const opacity = useTransform(
      sectionScrollProgress,
      [-0.42, -0.05, 0.05, 0.42],
      [0,1, 1,0]
      )

  return (
    <Container style={{opacity}}>
      {children}
    </Container>
  )
}

export default ModelOverlay

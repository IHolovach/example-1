import React, { FC, useEffect, useRef, useState, useCallback } from 'react'
import apisauce from 'apisauce'

import { getGeneralApiProblem } from '../../services'
import { Row } from '../row'
import { Spinner } from '../spinner'
import { FrameHTMLComponentProps } from './inner-html-component.types'
import { useStyle } from './inner-html-component.styles'

export const FrameHTMLComponent: FC<FrameHTMLComponentProps> = ({
  className,
  url = '',
  srcDoc = '',
  isSVG = false,
  delay = 3000,
  repeats = 40
}) => {
  const classes = useStyle()

  const ref = useRef<HTMLIFrameElement>(null)
  const [content, changeContent] = useState<string>('')
  const [isMounted, changeIsMounted] = useState<boolean>(true)
  const [loadAttempts, changeLoadAttempts] = useState(0)
  const [image, changeImage] = useState('')

  const handleOnLoad = useCallback(async () => {
    const api = apisauce.create({
      baseURL: url,
      headers: {
        'Cache-Control': 'no-cache'
      },
      // 60 second timeout...
      timeout: 60000
    })

    const response = await api.get<string>('')

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        changeLoadAttempts(loadAttempts + 1)
        return problem
      }
    }

    try {
      if (response.data) {
        return changeContent(response.data)
      }
    } catch {
      return { kind: 'bad-data' }
    }

    return response
  }, [url, loadAttempts])

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = content as string
    }

    return () => {
      if (ref.current) {
        ref.current.innerHTML = ''
      }
    }
  }, [ref, content])

  useEffect(() => {
    // retry to load when it failed
    const isReloadAllowed = loadAttempts && loadAttempts <= repeats
    if (url && isReloadAllowed) {
      setTimeout(() => handleOnLoad(), delay)
    }
  }, [loadAttempts, handleOnLoad])

  useEffect(() => {
    if (srcDoc) {
      changeContent(srcDoc)
    }
    if (url) {
      handleOnLoad()
    }

    return () => {
      changeIsMounted(false)
      changeContent('')
    }
  }, [url])

  useEffect(() => {
    if (srcDoc) {
      changeContent(srcDoc)
    }

    return () => {
      changeIsMounted(false)
      changeContent('')
    }
  }, [srcDoc])

  useEffect(() => {
    if (isMounted) {
      // @ts-ignore
      html2canvas(ref.current, {
        height: 900,
        width: 1000
      }).then((canvas: any) => {
        const a = canvas.toDataURL('image/png')
        changeImage(a)
      })
    }
  }, [isSVG, content, isMounted])

  if (isSVG) {
    return <img src={image} style={{ height: 550, width: 300 }} />
  }

  return content ? (
    <>
      <iframe
        ref={ref}
        loading="lazy"
        className={classes.container}
        width="100%"
        height="100%"
        src={url}
        srcDoc={content}
      />
    </>
  ) : (
    <Row className={className}>
      <Spinner isLoading={!content} />
    </Row>
  )
}

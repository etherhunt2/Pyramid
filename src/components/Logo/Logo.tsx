import clsx from 'clsx'
import React from 'react'
import logo from '@/../public/logo.jpeg'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={900}
      height={300}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[14rem] w-full h-[48px]', className)}
      src={logo.src}
    />
  )
}

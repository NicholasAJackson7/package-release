import React from 'react'
import './Card.css'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant of the card */
  variant?: 'elevated' | 'outlined' | 'filled'
  /** Padding size inside the card */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** Makes the card interactive with hover effects */
  interactive?: boolean
  children: React.ReactNode
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>
  Body: React.FC<CardBodyProps>
  Footer: React.FC<CardFooterProps>
} = ({
  variant = 'elevated',
  padding = 'md',
  interactive = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`card card-${variant} card-padding-${padding} ${interactive ? 'card-interactive' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '', ...props }) => (
  <div className={`card-header ${className}`} {...props}>
    {children}
  </div>
)

const CardBody: React.FC<CardBodyProps> = ({ children, className = '', ...props }) => (
  <div className={`card-body ${className}`} {...props}>
    {children}
  </div>
)

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '', ...props }) => (
  <div className={`card-footer ${className}`} {...props}>
    {children}
  </div>
)

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

CardHeader.displayName = 'Card.Header'
CardBody.displayName = 'Card.Body'
CardFooter.displayName = 'Card.Footer'


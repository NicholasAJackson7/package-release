import React, { forwardRef, useId } from 'react'
import './Input.css'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text displayed above the input */
  label?: string
  /** Helper text displayed below the input */
  helperText?: string
  /** Error message - displays in error state when provided */
  error?: string
  /** Size variant of the input */
  size?: 'sm' | 'md' | 'lg'
  /** Optional icon element to display on the left */
  leftIcon?: React.ReactNode
  /** Optional icon element to display on the right */
  rightIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'lg',
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId

    return (
      <div className={`input-wrapper ${className}`}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <div
          className={`input-container input-${size} ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''}`}
        >
          {leftIcon && <span className="input-icon input-icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className="input-field"
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {rightIcon && <span className="input-icon input-icon-right">{rightIcon}</span>}
        </div>
        {error && (
          <span id={`${inputId}-error`} className="input-message input-message-error" role="alert">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${inputId}-helper`} className="input-message">
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'


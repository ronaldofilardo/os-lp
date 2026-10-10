import type { JSX as ReactJSX } from 'react'

declare global {
  namespace JSX {
    type Element = ReactJSX.Element
    type ElementType = ReactJSX.ElementType
    type IntrinsicElements = ReactJSX.IntrinsicElements
    type IntrinsicAttributes = ReactJSX.IntrinsicAttributes
    type ElementAttributesProperty = ReactJSX.ElementAttributesProperty
    type ElementChildrenAttribute = ReactJSX.ElementChildrenAttribute
  }
}

export {}

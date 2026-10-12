'use client'

import { Component, type ReactNode } from 'react'

interface SceneBoundaryProps {
  readonly children: ReactNode
  readonly fallback: ReactNode
}

interface SceneBoundaryState {
  readonly hasFailed: boolean
}

export class SceneBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  override state: SceneBoundaryState = { hasFailed: false }

  static getDerivedStateFromError(): SceneBoundaryState {
    return { hasFailed: true }
  }

  override render(): ReactNode {
    return this.state.hasFailed ? this.props.fallback : this.props.children
  }
}

import React, { useContext } from 'react'
import NavigationHistoryContext from './NavigationHistoryContext'

export default function getLastUrl() {
  return useContext(NavigationHistoryContext)
}

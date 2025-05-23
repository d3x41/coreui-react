import React from 'react'
import { CCol, CFormInput, CRow } from '@coreui/react'

export const LayoutFormGridExample = () => {
  return (
    <CRow>
      <CCol xs>
        <CFormInput placeholder="First name" aria-label="First name" />
      </CCol>
      <CCol xs>
        <CFormInput placeholder="Last name" aria-label="Last name" />
      </CCol>
    </CRow>
  )
}

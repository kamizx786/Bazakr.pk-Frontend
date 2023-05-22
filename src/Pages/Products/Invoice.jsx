import React from 'react'
import {  Document, Page } from 'react-pdf';
import jsPDF from 'jspdf';
const Invoice = () => {
  return (
    <Document>
    <Page>
    <h1>Invoice</h1>
    <p>Invoice details go here...</p>
    </Page>
    </Document>
  )
}

export default Invoice
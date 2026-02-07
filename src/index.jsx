/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef, useState, useCallback } from 'react'
import ModalWindow from './modal-window.jsx'

const PayConfirmContext = createContext(null)

const defaultData = {
  commission: 0,
  address: null,
  chainId: null
}

const StasPayProvider = ({ children }) => {
  const resolverRef = useRef(null)
  const [data, setData] = useState(defaultData)

  const payConfirm = useCallback((data) => {
    return new Promise((resolve) => {
      resolverRef.current = resolve
      setData(data)
    })
  }, [])

  const close = (result) => {
    resolverRef.current?.(result)
    resolverRef.current = null
    setData(defaultData)
  }

  return (
    <PayConfirmContext.Provider value={payConfirm}>
      {children}
      <ModalWindow data={data} close={close} />
    </PayConfirmContext.Provider>
  )
}

const useStasPay = () => {
  const ctx = useContext(PayConfirmContext)
  if (!ctx) {
    throw new Error('usePay must be used inside Provider')
  }
  return ctx
}

export {
  StasPayProvider,
  useStasPay
}
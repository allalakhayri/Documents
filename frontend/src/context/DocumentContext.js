import { createContext, useReducer } from 'react'

export const DocumentsContext = createContext()

export const documentsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DOCUMENTS': 
      return {
        documents: action.payload
      }
    case 'CREATE_DOCUMENT':
      return {
        documents: [action.payload, ...state.documents]
      }
    case 'DELETE_DOCUMENT':
      return {
        documents: state.documents.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const DocumentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(documentsReducer, {
    documents: null
  })

  return (
    <DocumentsContext.Provider value={{...state, dispatch}}>
      { children }
    </DocumentsContext.Provider>
  )
}
import { useEffect }from 'react'
import { useDocumentsContext } from "../hooks/useDocumentsContext"

// components
import DocumentDetails from '../components/DocumentsDetails'
import DocumentsForm from '../components/DocumentsForm'

const Home = () => {
  const {documents, dispatch} = useDocumentsContext()

  useEffect(() => {
    const fetchDocuments= async () => {
      const response = await fetch('/api/documents')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_DOCUMENTS', payload: json})
      }
    }

    fetchDocuments()
  }, [dispatch])

  return (
    <div className="home">
      <div className="documents">
        {documents && documents.map((doc) => (
          <DocumentDetails key={doc._id} document={doc} />
        ))}
      </div>
      <DocumentsForm />
    </div>
  )
}

export default Home
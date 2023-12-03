import { useDocumentsContext } from '../hooks/useDocumentsContext'


const DocumentsDetails = ({ doc }) => {
  const { dispatch } = useDocumentsContext()

  const handleClick = async () => {
    const response = await fetch('/api/documents/' + doc._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_DOCUMENT', payload: json})
    }
  }

  return (
    <div className="document-details">
      <h4>{doc.Name}</h4>
      <p><strong>Type </strong>{doc.Type}</p>
      <p><strong>Description </strong>{doc.Description}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default DocumentsDetails
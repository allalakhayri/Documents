import { useState } from "react"
import { useDocumentsContext } from '../hooks/useDocumentsContext'


const DocumentsForm = () => {
  const { dispatch } = useDocumentsContext()

  const [Name, setName] = useState('')
  const [Type, setType] = useState('')
  const [Description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const document = {Name, Type,Description}

    const response = await fetch('/api/documents', {
      method: 'POST',
      body: JSON.stringify(document),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setName('')
      setType('')
      setDescription('')
      setError(null)
      setEmptyFields([])
      console.log('new document added', json)
      dispatch({type: 'CREATE_DOCUMENT', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Document</h3>

      <label>Document Name:</label>
      <input 
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={Name}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Type:</label>
      <input 
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={Type}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Description : </label>
      <textarea
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={Description}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Add Document</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default DocumentsForm
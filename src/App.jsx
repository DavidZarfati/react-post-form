import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const initialFormData = {
  author: "",
  title: "",
  body: "",
  pubblico: "",
}

function App() {
  // const [author, setauthor] = useState("")
  // const [title, setTitle] = useState("")
  // const [body, setBody] = useState("")
  // const [pubblico, setPubblico] = useState("")
  const [cards, setCards] = useState([])
  const [formData, setFormData] = useState(initialFormData)
  function updateFormData(event) {
    const key = event.target.name
    const newObject = {
      ...formData,
      [key]: event.target.value
    }
    setFormData(newObject)
  }
  function GestisciClick(event) {
    event.preventDefault();
    setCards([...cards, formData]);
    setFormData(initialFormData); // reset form
  }

  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-12 mb-2">
            <div className="row">

              <div className="col-3 mb-2">
                <label htmlFor="author">author</label>
                <input type="text"
                  id='author'
                  name='author'
                  className='form-control'
                  value={formData.author}
                  onChange={updateFormData} />
              </div>
              <div className="col-3 mb-2">
                <label htmlFor="title">title</label>
                <input type="text"
                  id='title'
                  name='title'
                  className='form-control'
                  value={formData.title}
                  onChange={updateFormData} />
              </div>
              <div className="col-6 mb-2">
                <label htmlFor="body">body of the article</label>
                <input type="text"
                  id='body'
                  name='body'
                  className='form-control'
                  value={formData.body}
                  onChange={updateFormData} />
              </div>


              <div className="col-12">
                <button onClick={GestisciClick}>Invia</button>
              </div>

              {cards.length > 0 && cards.map((card, index) => (
                <div className="col-12 col-4" key={index}>
                  <div className="card">
                    <div className="card-header">{card.title} written by: {card.author}</div>
                    <div className="card-body">
                      <p>{card.body}</p>
                    </div>
                  </div>
                </div>
              ))}




            </div>
          </div>






        </div>
      </div>
    </>
  )
}

export default App

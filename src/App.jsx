import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const initialFormData = {
  author: "",
  title: "",
  body: "",
  pubblico: "pubblico",
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
    setFormData(initialFormData);
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


              <div className="col-6">
                <button onClick={GestisciClick}>Invia</button>
              </div>
              <div className="col-6">
                <input type="radio" name="pubblico" id="pubblico" value="pubblico" checked={formData.pubblico === "pubblico"} onChange={updateFormData} />
                <label htmlFor="junior">pubblico</label>
                <input type="radio" name="pubblico" id="privato" value="privato" checked={formData.pubblico === "privato"} onChange={updateFormData} />
                <label htmlFor="middle">privato</label>
              </div>

              {cards.length > 0 && cards.map((card, index) => (
                <div className="col-6" key={index}>
                  <div className={card.pubblico === "pubblico" ? "card bg-primary" : "card bg-danger"}>
                    <div className="card-header">{card.title} written by: {card.author}</div>
                    <div className="card-body">
                      <p>{card.body}</p>
                      <h6>{card.pubblico === "pubblico" ? "se la carta è blu vuol dire che il post è pubblico" : "se la carta è rossa vuol dire che e privato(potrei scegliere di non farlo vedere con d-none)"}</h6>
                    </div>
                  </div>
                </div>
              ))}




            </div>
          </div>






        </div>
      </div >
    </>
  )
}

export default App

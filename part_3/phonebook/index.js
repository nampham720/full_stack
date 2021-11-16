const { request, response } = require('express')
const express = require('express')

const app = express()
var morgan = require('morgan')

morgan.token('body', req => {
    return JSON.stringify(req.body)
  })

app.use(express.json());
app.use(morgan(':method :url :body'))

let persons = 
[
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
  
app.get('/info', (request, response) => {
    const maxPerson = () => {
        const maxNumber = persons.length > 0
            ? Math.max(...persons.map(x => x.id))
            : 0
        return maxNumber
    }

    const date = new Date
    response.send(`
        <div>
            <p>Phonebook has info for ${maxPerson()}</p>
            <br>
            <p>${date}</p>
        </div>
        `
    )
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    person = persons.find(x => x.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    person = persons.filter(x => x.id !== id)
  
    response.status(204).end()
  })

const generateId = () => {
    const id = Math.floor(Math.random() * persons.length) + 92010
    return id
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const matched = persons.find(x => x.name == body.name)
    // // console.log(request.body)

    if (!body.name || !body.number) {
        return response.status(400).json({ 
        error: 'content missing' 
        })
    } else if (matched) {
        return response.status(400).json({
            error: "name must be unique"
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }
    persons = persons.concat(person)
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
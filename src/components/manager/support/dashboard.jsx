import { useContext, useEffect, useRef, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import io from 'socket.io-client'
import { backendURL } from '../../../App'
import { AppContext } from '../../global/useContext'

const chatRequests = [
  {
    user: 123,
    messages: [
      'Hallo ich habe folgendes Problem:',
      'ich habe mir gerade die Grafikkarte mit der artikelNr: 23759 bestellt und habe nun festgestellt, dass die Lieferaddresse falsch ist.',
      'Kann man diese noch ändern?',
    ],
    status: false,
  },
  {
    user: 373,
    messages: [
      'hey ein Freund und ich hatten für seinen PC einen Arbeitsspeicher bestellt, jedoch ist der falsche gekommen, bitte um klärung, Danke!',
    ],
    status: true,
  },
  {
    user: 107,
    messages: [
      'Hallo ich habe eine allgemeine Frage zum Thema CPU.',
      'Ich suche eine passende CPU für mein neues Mainboard, das Z590 von Gigabyte.',
    ],
    status: false,
  },
  {
    user: 373,
    messages: [
      'Hey ich habe eine Frage zum Thema Mainboards',
      'Wenn da Kompatibel mit DD4 steht, heißt das 4 und älter? Würde mein DDR3 Speicher passen?',
    ],
    status: false,
  },
]

const messagePreview = (arr) => {
  return arr.map((request, i) => (
    <a
      href="#"
      className="list-group-item list-group-item-action list-group-item-light rounded-0"
      key={i}
      onClick={() => createChat(request)}
    >
      <div className="media">
        <img src="" alt="" />
        <div className="media-body ml-4">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="mb-0">{request.user}</h6>
            <small className="small font-weight-bold">25 Dec</small>
          </div>
          <p
            className="font-italic mb-0 text-small"
            style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
          >
            {request.messages.join(' ')}
          </p>
        </div>
      </div>
    </a>
  ))
}

export const DashboardSupport = () => {
  const { token, userData } = useContext(AppContext)
  const textAreaRef = useRef()
  const socketRef = useRef()
  const bottomRef = useRef(null)

  const [pending, setPending] = useState([])
  const [open, setOpen] = useState([])
  const [status, setStatus] = useState([])

  chatRequests.map((request) => {
    request.status ? setPending(...pending, request) : setOpen(...open, request)
  })
  //setStatus(...status, pending + open)

  useEffect(() => {
    console.log(status)
  }, [open, pending, status])

  const createChat = (request) => {
    request.status = true
    console.log(request.status)
  }

  // Collect Messages
  const [socketMessages, setSocketMessages] = useState([])

  useEffect(() => {
    socketRef.current = io(backendURL, {
      reconnectionDelayMax: 100000,
      auth: {
        token: token,
      },
    })
    return () => {
      socketRef.current && socketRef.current.disconnect()
    }
  }, [])

  const sendMessage = () => {
    socketRef.current.emit('message', {
      group: userData.group,
      username: userData.username,
      message: textAreaRef.current.value,
    })
    textAreaRef.current.value = null
  }

  useEffect(() => {
    socketRef.current.on('message', (msg) => {
      const newMSG = {
        userID: msg.userID,
        username: msg.username,
        id: msg.id,
        message: msg.message,
        timestamp: new Date(msg.timestamp).toISOString().slice(11, 19),
      }
      // collect messages
      setSocketMessages([...socketMessages, newMSG])
    })

    return () => {
      socketRef.current && socketRef.current.off('message')
    }
  }, [socketMessages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [socketMessages])
  //console.log('SocketMSG', socketMessages)

  return (
    <Container>
      <Row>
        <Col lg={4} style={{ padding: '0.5rem' }}>
          <div className="row rounded-lg overflow-hidden shadow">
            {/* Tickets -> Status = process */}
            <div className="col-12 px-0" style={{ maxHeight: '10rem' }}>
              <div className="bg-white">
                <div className="bg-gray px-4 py-2 bg-success">
                  <p className="h5 mb-0 py-1">Supportanfragen in Bearbeitung</p>
                </div>
                <div className="messages-box">
                  <div className="list-group rounded-0">{() => messagePreview(status)}</div>
                </div>
              </div>
            </div>
            {/* Tickets -> Status = open */}
            <div className="col-12 px-0">
              <div className="bg-white">
                <div className="bg-gray px-4 py-2 bg-success">
                  <p className="h5 mb-0 py-1">Offene Supportanfragen</p>
                </div>
                <div className="messages-box">
                  <div className="list-group rounded-0">{() => messagePreview(status)}</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={8} style={{ padding: '0.5rem' }}>
          <div>
            {/* <!-- Chat Box--> */}
            <div className="col-12 px-0">
              <div
                className="px-4 py-5 chat-box text-white"
                style={{ backgroundColor: '#ededed33', maxHeight: '20rem', border: 'solid red' }}
              >
                {socketMessages.map((message, i) => {
                  return (
                    <div key={i} ref={bottomRef}>
                      {/* Sender Message */}
                      <div className="media w-75 mb-2">
                        <img src="" alt="" />
                        <div className="media-body ml-3">
                          <div
                            className="rounded py-2 px-3 mb-2"
                            style={{ backgroundColor: '#ededed33' }}
                          >
                            <p className="text-small mb-0">{message.message}</p>
                          </div>
                          <p className="small">{message.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/* Sender Message */}
                <div className="media w-75 mb-2" style={{ marginLeft: 'clamp(1rem, 10%, 10rem)' }}>
                  <img src="" alt="" />
                  <div className="media-body ml-3">
                    <div
                      className="rounded py-2 px-3 mb-2"
                      style={{ backgroundColor: '#ededed33' }}
                    >
                      <p className="text-small mb-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
                        reiciendis debitis corrupti quod sit eligendi, officia placeat. Quidem,
                        laborum earum!
                      </p>
                    </div>
                    <p className="small">gfhgfh</p>
                  </div>
                </div>

                {/* Reciever Message */}
                <div className="media w-75 ml-auto mb-2">
                  <div className="media-body">
                    <div
                      className="rounded py-2 px-3 mb-2"
                      style={{ backgroundColor: '#ededed33' }}
                    >
                      <p className="text-small mb-0 text-white">
                        Apollo University, Delhi, India Test
                      </p>
                    </div>
                    <p className="small">12:00 PM | Aug 13</p>
                  </div>
                </div>
              </div>

              {/* <!-- Typing area --> */}
              <form action="#" className="bg-light">
                <div className="input-group">
                  <textarea
                    rows="5"
                    cols="60"
                    maxLength={380}
                    placeholder="schreibe eine Nachricht..."
                    onKeyUp={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                    ref={textAreaRef}
                    className="form-control rounded-0 border-0 py-4 bg-light"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button id="button-addon2" type="submit" className="btn btn-link">
                      {'CLOSE'}
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

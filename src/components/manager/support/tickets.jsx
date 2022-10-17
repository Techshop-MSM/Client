export const Tickets = (arr) => {
  return arr.map((chat, i) => (
    <a
      href="#"
      className="list-group-item list-group-item-action list-group-item-light rounded-0"
      key={i}
      onClick={() => createChat(chat)}
    >
      <div className="media">
        <div className="media-body ml-4">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="mb-0 w-50">{`ID: ${chat.user}`}</h6>
            <p className="small font-weight-bold w-50">{chat.date}</p>
          </div>
          <p
            className="font-italic mb-0 text-small"
            style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
          >
            {chat.messages.join(' ')}
          </p>
        </div>
      </div>
    </a>
  ))
}

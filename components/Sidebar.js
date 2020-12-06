export default function Sidebar(props) {
  return (
    <>
      <aside {...props}>
        <div className="sticky">
          <div className="avatar">
            <img src="/static/img/azhari-subroto.jpg" alt="Azhari Subroto - Senior frontend engineer" />
          </div>
          <h1 className="title">Azhari Subroto</h1>
          <h2>Senior Frontend Engineer</h2>
        </div>
      </aside>

      <style jsx>
        {`
          .sticky {
            position: sticky;
            top: 50px;
          }
          /* Avatar */
          .avatar {
            width: 120px;
            height: 120px;
            overflow: hidden;
            border-radius: 40%;
            background: #ffffff;
            box-shadow: 0 20px 25px -5px #dbe2ea, 0 10px 10px -5px #dbe2ea;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        `}
      </style>
    </>
  )
}

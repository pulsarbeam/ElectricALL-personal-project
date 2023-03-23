import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <Link to="/customer">
          <button>Register New Customer</button>
        </Link>
      </div>
      <div>
        <Link to="/coc">
          <button>New COC</button>
        </Link>
      </div>
    </>
  )
}

export default Home

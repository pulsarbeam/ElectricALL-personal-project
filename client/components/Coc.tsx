import { Link } from 'react-router-dom'

function Coc() {
  return (
    <div>
      <ul>
        <li>
          <Link
            to="https://www.ewrb.govt.nz/assets/documents/forms/WKS-14-electricity-electrical-coc-and-esc.pdf"
            target="_blank"
          >
            New Code of Compliance
          </Link>
        </li>
        <li>
          <Link
            to="https://www.ewrb.govt.nz/assets/documents/forms/WKS-14-energy-safety-electrical-safety-certificate.pdf"
            target="_blank"
          >
            New Electrical Safety Certificate
          </Link>
        </li>
      </ul>

      <Link to="/">Home</Link>
    </div>
  )
}

export default Coc

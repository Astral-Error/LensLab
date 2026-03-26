import { useParams } from "react-router-dom"
import{Link} from "react-router-dom"

const LensPage = ({lenses}) => {
  const { id } = useParams()
  const lens = lenses.find((l)=>l.id==Number(id))
  if(!lens){
    return <p>Lens not found</p>
  }
  return (
    <div className="lens-page">
      <div className="lens-details-card">
        <Link to="/" id="back-button">← Back</Link>
        <div className="lens-title">
          <h1>{lens.name}</h1>
          <span className="lens-brand">{lens.brand}</span>
        </div>

        <div className="lens-spec-grid">
          <div className="spec">
            <span className="spec-label">Focal Length</span>
            <span className="spec-value">{lens.fl}</span>
          </div>

          <div className="spec">
            <span className="spec-label">Aperture</span>
            <span className="spec-value">{lens.aperture}</span>
          </div>

          <div className="spec">
            <span className="spec-label">Mount</span>
            <span className="spec-value">{lens.mount}</span>
          </div>

          <div className="spec">
            <span className="spec-label">Weight</span>
            <span className="spec-value">{lens.wght}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LensPage
// Profile.jsx — pagina "Edit Profile".
// Refactoring fedele dell'HTML originale, con le solite trasformazioni JSX.
// Per i bottoni che dovevano "navigare" (Cancel torna alla home) uso
// useNavigate di React Router invece del vecchio onclick="showPage('home')".

import { useNavigate } from 'react-router-dom'

function Profile() {

  // useNavigate restituisce una funzione per navigare programmaticamente
  // (cioè da JavaScript, non con un click su Link).
  const navigate = useNavigate()

  return (
    <div className="profile-page">
      <h1 className="profile-title">Edit Profile</h1>
      <hr className="profile-divider" />

      <div className="profile-form">

        {/* Avatar + Campi */}
        <div className="profile-top">
          <div className="profile-avatar-wrap">
            <img
              src="/Netflix-assets/assets/avatar.png"
              alt="Avatar"
              className="profile-avatar-large"
            />
            <div className="avatar-edit-icon">
              <i className="fa-solid fa-pencil"></i>
            </div>
          </div>
          <div className="profile-fields">
            <input
              type="text"
              className="profile-input"
              defaultValue="Strive Student"
            />

            <label className="profile-label">Language:</label>
            <select className="profile-select">
              <option>English</option>
              <option>Italiano</option>
              <option>Español</option>
            </select>
          </div>
        </div>

        <hr className="profile-divider" />

        {/* Maturity Settings */}
        <div className="profile-section">
          <h3 className="profile-section-title">Maturity Settings:</h3>
          <button className="btn-maturity">ALL MATURITY RATINGS</button>
          <p className="profile-section-text">
            Show titles of <strong>all maturity ratings</strong> for this profile.
          </p>
          <button className="btn-edit-maturity">EDIT</button>
        </div>

        <hr className="profile-divider" />

        {/* Autoplay */}
        <div className="profile-section">
          <h3 className="profile-section-title">Autoplay controls</h3>
          <label className="profile-checkbox">
            <input type="checkbox" defaultChecked />
            <span>Autoplay next episode in a series on all devices.</span>
          </label>
          <label className="profile-checkbox">
            <input type="checkbox" defaultChecked />
            <span>Autoplay previews while browsing on all devices.</span>
          </label>
        </div>

        <hr className="profile-divider" />
      </div>

      {/* Bottoni azione */}
      <div className="profile-actions">
        <button className="btn-save">SAVE</button>
        <button className="btn-cancel" onClick={() => navigate('/')}>
          CANCEL
        </button>
        <button className="btn-delete">DELETE PROFILE</button>
      </div>
    </div>
  )
}

export default Profile

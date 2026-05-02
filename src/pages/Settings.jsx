// Settings.jsx — pagina "Account".
// Refactoring fedele dell'HTML originale.

function Settings() {
  return (
    <div className="settings-page">
      <h1 className="settings-title">Account</h1>

      {/* Membership & Billing */}
      <div className="settings-section">
        <div className="settings-col-label">
          <span>MEMBERSHIP &amp; BILLING</span>
          <button className="btn-cancel-membership">Cancel Membership</button>
        </div>
        <div className="settings-col-content">
          <p>student@strive.school</p>
          <p>Password: ••••••••</p>
          <p>Phone: 321 044 1279</p>
          <div className="settings-divider-thin"></div>
          <p>
            <i className="fa-brands fa-paypal"></i> PayPal &nbsp; admin@strive.school
          </p>
        </div>
        <div className="settings-col-actions">
          <a href="#">Change account email</a>
          <a href="#">Change password</a>
          <a href="#">Change phone number</a>
          <div className="settings-divider-thin"></div>
          <a href="#">Update payment info</a>
          <a href="#">Billing details</a>
          <div className="settings-divider-thin"></div>
          <a href="#">Redeem gift card or promo code</a>
          <a href="#">Where to buy gift cards</a>
        </div>
      </div>

      <hr className="settings-divider" />

      {/* Plan Details */}
      <div className="settings-section">
        <div className="settings-col-label">
          <span>PLAN DETAILS</span>
        </div>
        <div className="settings-col-content">
          <p>Premium <span className="badge-ultrahd">ULTRA HD</span></p>
        </div>
        <div className="settings-col-actions">
          <a href="#">Change plan</a>
        </div>
      </div>

      <hr className="settings-divider" />

      {/* Settings */}
      <div className="settings-section">
        <div className="settings-col-label">
          <span>SETTINGS</span>
        </div>
        <div className="settings-col-content">
          <a href="#">Parental controls</a>
          <a href="#">Test participation</a>
          <a href="#">Manage download devices</a>
          <a href="#">Activate a device</a>
          <a href="#">Recent device streaming activity</a>
          <a href="#">Sign out of all devices</a>
        </div>
        <div className="settings-col-actions"></div>
      </div>

      <hr className="settings-divider" />

      {/* My Profile */}
      <div className="settings-section">
        <div className="settings-col-label">
          <span>MY PROFILE</span>
        </div>
        <div className="settings-col-content">
          <div className="settings-profile-row">
            <img
              src="/Netflix-assets/assets/avatar.png"
              alt="Profile"
              className="settings-avatar"
            />
            <span>Strive Student</span>
          </div>
          <div className="settings-profile-links">
            <div>
              <a href="#">Language</a>
              <a href="#">Playback settings</a>
              <a href="#">Subtitle appearance</a>
            </div>
            <div>
              <a href="#">Viewing activity</a>
              <a href="#">Ratings</a>
            </div>
          </div>
        </div>
        <div className="settings-col-actions">
          <a href="#">Manage profiles</a>
          <a href="#">Add profile email</a>
        </div>
      </div>
    </div>
  )
}

export default Settings

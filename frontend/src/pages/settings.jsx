function Settings() {
    return (
        <div className="col" style={{ marginTop: '100px', marginBottom: '180px' }}>

            {/* ======================
                PAGE HEADER
            ====================== */}
            <div className="col-9 mx-auto mb-4">
                <h2 className="fw-bold mb-1">Settings</h2>
                <p className="text-muted mb-0">
                    Manage your account preferences and security
                </p>
            </div>

            {/* ======================
                ACCOUNT SETTINGS
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-4 mb-4">

                <h5 className="fw-bold mb-3">Account</h5>

                <div className="row g-3">

                    <div className="col-md-6">
                        <label className="form-label">Display name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Vítor"
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="vitor@email.com"
                            disabled
                        />
                        <small className="text-muted">
                            Email cannot be changed
                        </small>
                    </div>

                </div>

            </div>

            {/* ======================
                SECURITY SETTINGS
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-4 mb-4">

                <h5 className="fw-bold mb-3">Security</h5>

                <div className="row g-3">

                    <div className="col-md-4">
                        <label className="form-label">Current password</label>
                        <input
                            type="password"
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">New password</label>
                        <input
                            type="password"
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Confirm new password</label>
                        <input
                            type="password"
                            className="form-control"
                        />
                    </div>

                </div>

                <div className="mt-3">
                    <button className="btn btn-dark">
                        Change password
                    </button>
                </div>

            </div>

            {/* ======================
                PLAYER SETTINGS
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-4 mb-4">

                <h5 className="fw-bold mb-3">Player</h5>

                <div className="form-check form-switch mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="autoplay"
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="autoplay">
                        Autoplay next song
                    </label>
                </div>

                <div className="form-check form-switch mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="crossfade"
                    />
                    <label className="form-check-label" htmlFor="crossfade">
                        Enable crossfade
                    </label>
                </div>

            </div>

            {/* ======================
                DANGER ZONE
            ====================== */}
            <div className="border border-danger rounded col-9 mx-auto p-4">

                <h5 className="fw-bold text-danger mb-3">Danger zone</h5>

                <p className="text-muted">
                    These actions are irreversible. Please proceed carefully.
                </p>

                <button className="btn btn-outline-danger">
                    Delete account
                </button>

            </div>

        </div>
    );
}

export default Settings;

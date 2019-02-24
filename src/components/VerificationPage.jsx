import React, { Component } from 'react';

class VerificationPage extends Component {
    render() {
        return (
            <div>
                <h2>PERHATIAN !</h2>
                <p>Silahkan mengecheck email anda untuk verifikasi account anda</p>
                <p>
                    Bila anda tidak mendapatkan email dari KenyanginAja.com silahkan click button di bawah ini untuk Resend
                </p>
                <input type='button' value='Resend Email' />
            </div>
        )
    }
}

export default VerificationPage;
import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import apiService from '../../services/api/api';
import { useAsapContext } from '../../services/state/AsapContextProvider';
import style from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { updateAsapAuth } = useAsapContext();
    const [credentials, setCredentials] = useState({ username: '', password: '', showPassword: false });
    const { formatMessage } = useIntl();

    const from = location.state?.from?.pathname || '/';

    const handleChange = prop => event => setCredentials({ ...credentials, [prop]: event.target.value });

    const handleClickShowPassword = () => setCredentials({ ...credentials, showPassword: !credentials.showPassword });

    const handleMouseDownPassword = event => event.preventDefault();

    const onSubmit = e => {
        e.preventDefault();
        apiService.AuthService.login(credentials.username, credentials.password)
            .then(data => {
                const token = data.token;
                const decodedToken = jwt_decode(token);
                updateAsapAuth({ ...decodedToken, token });
                navigate(from, { replace: true });
            })
            .catch(() => {
                //TODO: handle error
            });
    };

    return (
        <div className={style.loginContainer}>
            <form className={style.loginFormContainer} onSubmit={onSubmit}>
                <div>
                    <TextField
                        className={style.usernameTextField}
                        label={formatMessage({ id: 'login.username.placeholder' })}
                        type={'text'}
                        value={credentials.username}
                        onChange={handleChange('username')}
                    />
                </div>

                <div>
                    <TextField
                        className={style.passwordTextField}
                        label={formatMessage({ id: 'login.password.placeholder' })}
                        type={credentials.showPassword ? 'text' : 'password'}
                        value={credentials.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {credentials.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </div>
                <div>
                    <button className={style.submitButton}>{formatMessage({ id: 'login.submit' })}</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
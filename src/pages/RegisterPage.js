import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('パスワードが一致しません。');
      return;
    }
    if (password.length < 8) {
        alert('パスワードは8文字以上で入力してください。');
        return;
    }
    axios.post('/api/register', { email, password, lastname, firstname })
      .then(response => {
        navigate('/mypage');
      })
      .catch(error => {
        console.error('Registration error:', error);
        alert('登録に失敗しました。');
      });
  };

  return (
    <div>
      <h2>新規登録</h2>
      <form onSubmit={handleRegister}>
      <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      <label>姓:</label>
        <input
          type="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>名:</label>
        <input
          type="fistname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>パスワード:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>パスワード確認用:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">登録</button>
      </form>
      <button onClick={() => navigate('/')}>アカウントを持っている</button>
    </div>
  );
}

export default RegisterPage;

import React from 'react'; // �ޤJ React�A�Ω�ϥ� JSX �y�k�M React �\��
import ReactDOM from 'react-dom/client'; // �ޤJ ReactDOM�A�Ω�N React �����V�� DOM ��
import App from './App'; // �ޤJ�D���� `App`�A�O���Ϊ��ڤ���
import './styles.css'; // �ޤJ���Ϊ��˦���

// �Ыؤ@�� React �ڮe���A�ñN `App` �����V���� public/index.html ���� #root DOM �`�I
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // �ϥ� JSX �y�k�N `App` �����V�쭶���W
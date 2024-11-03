import React, { useState } from 'react'; // �ޤJ React �M `useState`�A�Ω�޲z���A
import ListItem from './ListItem'; // �ޤJ `ListItem` �l����

// �w�q `App` �禡����A�@�����Ϊ��D�ե�
function App() {
    // �ϥ� useState Hook �Ӻ޲z `count` ���A�A�w�]�Ȭ� 0
    const [count, setCount] = useState(0);

    // �w�q���s���I���ƥ�B�z�禡�A�I���ɱN `count` ���A�W�[ 1
    const handleButtonClick = () => {
        setCount(count + 1); // ��s `count` ����
    };

    // JSX ��^�����e�O��V�b�����W�� HTML ���c�M��L����
    return (
        <div className="app-container"> {/* �e�������A���Ϊ��D���c */}
            <h1>React �����Υܨ�</h1> {/* �D���D */}
            <p>�ثe�p��: {count}</p> {/* ��ܷ�e�� `count` ���A */}
            <button onClick={handleButtonClick}>�W�[�p��</button> {/* �I�����sĲ�o `handleButtonClick` �禡 */}
            <h2>�d�ҲM��G</h2> {/* �l���D */}
            <ul>
                {/* �ϥ� `ListItem` �l�������ܦC���A�ǤJ `text` �ݩ� */}
                <ListItem text="�Ĥ@��" />
                <ListItem text="�ĤG��" />
                <ListItem text="�ĤT��" />
            </ul>
        </div>
    );
}

// �N `App` ����]���w�]�ɥX�A�Ѩ�L���ɤJ�ϥ�
export default App;


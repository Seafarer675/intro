import React from 'react'; // �ޤJ React�A�Ω�ϥ� JSX �y�k

// �w�q `ListItem` �禡����A���� `text` �ݩʧ@���Ѽ�
function ListItem({ text }) {
    // ��^�@�ӦC�� `<li>`�A��� `text` �����e
    return <li>{text}</li>;
}

// �N `ListItem` ����]���w�]�ɥX�A�Ѩ�L���ɤJ�ϥ�
export default ListItem;

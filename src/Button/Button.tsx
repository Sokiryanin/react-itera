
import {FC}  from "react";


type BtnProps = {
    onClick: (val:string) => void,
    content: string
};

const BtnStyle = {
    width: '100px',
    height: "30px",
    cursor: "pointer",
    color: 'white',
    padding: '2px',
    backgroundColor: "orange",
    border: 'none',
    borderRadius: "3px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: '10px',
}

export const Button: FC<BtnProps> = (props) => {
    return <button type="button" style={BtnStyle} onClick={() => { props.onClick("Hello!"); } }>{props.content}</button>;
}
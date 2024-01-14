type HeaderProps = {
    copyright: string;
}

export const Header: React.FC <HeaderProps> = (props) => (

    <header>
        <h1>Contacts {props.copyright}</h1>
    </header>

)


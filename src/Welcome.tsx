import {FC} from 'react';

type WelcomeProps = {content: string};

export const Welcome: FC<WelcomeProps> = (props) => (
    <h2>{props.content}</h2>
)
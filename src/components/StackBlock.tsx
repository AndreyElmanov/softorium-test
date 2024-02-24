import { getRandomColor } from '../helpers/functions';

type StackBlockPropsType = {
    text: string
};

export default function StackBlock({text}: StackBlockPropsType) {
    const color = getRandomColor();

    return (
        <span className='stack_block m-1 text-nowrap' style={{backgroundColor: color}}>
            {text}
        </span>
    )
}
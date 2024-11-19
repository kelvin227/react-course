function Message(){
    const name = [
        'kevin ngene',
        'samuel udolisah',
        'henry moubike',
    ];

    return (
        <ul>
            {name.map((name) => (<li key={(name)}>{name}</li>))}
        </ul>
    )
}
export default Message;
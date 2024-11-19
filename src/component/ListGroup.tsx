import { useState } from "react";
interface Props{
    list: string[];
    heading: string;
}
function ListGroup({list, heading}: Props){

    /*if the item is empty then display no item found*/
    if (list.length == 0)
        return (
    <>
    <h1>{heading}</h1>
    <p>No item Found</p>
    </>
        )

    const checkList = list.length == 3 && <p>this is a different statement</p>;
    let blue = 0;

    //hook
    const [selectedIndex, setSelectedIndex] = useState(-1)
    return (
    /**/
    /*this <></> means a fragment and a fragment is used to tell react to allow for more than one html element*/
    <>
    <h1>{heading}</h1>
    <ul className="list-group">
        {list.map((lists, Index) => (<li className={selectedIndex === Index ? 'list-group-item active' : 'list-group-item'} key={lists} onClick={()=> setSelectedIndex(Index)}>{lists}</li>))}
    </ul>
    </>
    );
}

export default ListGroup;
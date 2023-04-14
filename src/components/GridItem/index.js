import React from "react";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowCircleDown,
    FaTrash,
} from "react-icons/fa";

const GridItem = ({newItem, onDelete}) => {
    return (
        <C.Tr>
            <C.Td>{newItem.desc}</C.Td>
            <C.Td>{newItem.amount}</C.Td>
        <C.Td alignCenter>
            {item.expense ? (
                <FaRegArrowCircleDown color="red" />
            ) : ( 
                <FaRegArrowAltCircleUp color="green"/>
            )}
        </C.Td>
        <C.Td alignCenter>
            <FaTrash onClick={() => onDelete(item.id)} />
        </C.Td>
        </C.Tr>
    );
};

import default Grid
Item;
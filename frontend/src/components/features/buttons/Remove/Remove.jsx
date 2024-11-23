import React, { useContext } from "react";
import { deleteCard } from "../../../api";
import { DataContext } from "../../../../providers/DataContext";
import "./Remove.css";

const Remove = (props) => {
    const { data, setData } = useContext(DataContext)

    const handleRemove = () => {
        deleteCard(props.id).then(() => {
            const updatedData = data.filter(item => item.id !== props.id);
            setData(updatedData)
        })
    }

    return (
        <button className="remove" onClick={handleRemove}>
            Remove
        </button>
    );
};

export default Remove;

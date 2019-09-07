import React from 'react'
import {AnswerItems} from "./style"

const AnswerItem = (p) => {
    console.log(p.state)

    return (
        <AnswerItems
            onClick={() => p.onAnswerClick(p.v.id)}
            className={p.state}
        >
            {p.v.text}
        </AnswerItems>
    )
}

export default AnswerItem;

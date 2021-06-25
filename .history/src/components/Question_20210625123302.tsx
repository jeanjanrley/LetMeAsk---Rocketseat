import '../styles/question.scss'
import {reactNode} from 'react'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children: 
}

export function Question({content, author}: QuestionProps){
    return(
        <div className="question">
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt="author.name" />
                    <span>{author.name}</span>
                </div>
                <div></div>
            </footer>
        </div>
    )
}
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleNewLikeComment() {
    setLikeCount((oldLikeCount) => {
      return oldLikeCount + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/GBTelles1.png' alt=''/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel</strong>
              <time title='December 28th, 2022 at 14:42' dateTime='2022-12-28 14:42:40'>An hour ago</time>
            </div>

            <button onClick={handleDeleteComment} title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleNewLikeComment}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
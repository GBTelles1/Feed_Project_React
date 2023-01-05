import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
const [comments, setComments] = useState([
  
])

  const publishedDateFormatted = format(publishedAt, "LLLL d',' yyyy 'at' HH:mm")

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault()

    const newCommentText = event.target.comment.value

    setComments([...comments, newCommentText]);

    event.target.comment.value = '';
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>

            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type == 'link') {
            return <p><a href={line.content}>{line.content}</a></p>;
          }
        })}

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give a feedback</strong>

        <textarea
          name='comment'
          placeholder='Comment here' 
        />

        <footer>
          <button type='submit'>Post</button>  
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  )
}
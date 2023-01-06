import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GBTelles1.png',
      name: 'Gabriel',
      role: 'Full Stack Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Meu site com React + Vite' },
      { type: 'paragraph', content: 'Voce pode acessar mais projetos meus no meu GitHub:' },
      { type: 'link', content: 'https://github.com/GBTelles1' },
    ],
    publishedAt: new Date('2022-12-27 14:42:40'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/carolgirafa.png',
      name: 'Carol',
      role: 'Python Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Meu GitHub:' },
      { type: 'link', content: 'https://github.com/carolgirafa' },
    ],
    publishedAt: new Date('2022-12-30 12:40:40'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/eriket0107.png',
      name: 'Erik',
      role: 'Full Stack JS Developer'
    },
    content: [
      { type: 'paragraph', content: 'Meu GitHub:' },
      { type: 'link', content: 'https://github.com/eriket0107' },
    ],
    publishedAt: new Date('2022-12-30 12:40:40'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

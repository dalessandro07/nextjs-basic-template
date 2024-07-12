import { APP_AUTHOR, APP_AUTHOR_WEBSITE } from '@/core/constants'

export default function Footer () {
  return (
    <footer className='text-xs'>
      Desarrollado por {' '}
      <a
        className='hover:underline text-blue-500'
        href={APP_AUTHOR_WEBSITE}
        target="_blank"
        rel="noopener noreferrer"
      >
        {APP_AUTHOR}
      </a>
    </footer>
  )
}

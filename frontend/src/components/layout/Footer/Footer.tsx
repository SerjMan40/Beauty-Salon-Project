import './Footer.scss'

export function Footer() {
  return (
    <footer className="site-footer">
      <span>Beauty Salon</span>
      <small>© {new Date().getFullYear()}</small>
    </footer>
  )
}

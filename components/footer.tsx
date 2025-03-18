import { CREATE_BY_COMPANY } from '@/lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear}
        {' .'}
        <span className="font-bold">{CREATE_BY_COMPANY}. </span> All Rights
        Reserved
      </div>
    </footer>
  )
}

export default Footer

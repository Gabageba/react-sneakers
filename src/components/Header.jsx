const Header = () => {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <div className='d-flex align-center'>
        <img width={40} height={40} src='/img/logo.png' alt='Logo' />
        <div>
          <h3 className='text-uppercase'>React sneakers</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className='d-flex'>
        <li className='mr-30'>
          <img width={18} height={18} src='/img/cart.svg' alt='cart' />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src='/img/user.svg' alt='favourite' />
        </li>
      </ul>
    </header>
  )
}

export default Header

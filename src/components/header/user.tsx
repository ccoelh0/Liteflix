import UserImage from '../utils/images/user.png'
import styled from 'styled-components'

const User = () => {
  return <Icon src={UserImage} alt='User imagen' />
}

export default User

const Icon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: contain;
  border-image: 1px solid;
`